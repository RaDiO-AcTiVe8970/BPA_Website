// pages/index.js
import React, { useState, useRef, useEffect } from 'react';

const ExcelPage = () => {
  const numRows = 10;
  const numCols = 5;

  const [cells, setCells] = useState(() => Array.from({ length: numRows }, () => Array(numCols).fill('')));
  const [selectedCells, setSelectedCells] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(null);

  const containerRef = useRef(null);

  const handleCellChange = (rowIndex, colIndex, value) => {
    const updatedCells = [...cells];
    updatedCells[rowIndex][colIndex] = value;
    setCells(updatedCells);
  };

  const handleCellClick = (rowIndex, colIndex, shiftKey) => {
    if (shiftKey) {
      // Handle multiple cell selection
      const newSelectedCells = [];
      if (dragStart) {
        for (let i = Math.min(rowIndex, dragStart.rowIndex); i <= Math.max(rowIndex, dragStart.rowIndex); i++) {
          for (let j = Math.min(colIndex, dragStart.colIndex); j <= Math.max(colIndex, dragStart.colIndex); j++) {
            newSelectedCells.push({ rowIndex: i, colIndex: j });
          }
        }
      }
      setSelectedCells(newSelectedCells);
    } else {
      setSelectedCells([{ rowIndex, colIndex }]);
      setDragStart({ rowIndex, colIndex });
    }
  };

  const handleContainerMouseDown = () => {
    setIsDragging(true);
  };

  const handleContainerMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  const handleCopy = () => {
    const copiedContent = selectedCells.map((cell) => cells[cell.rowIndex][cell.colIndex]);
    navigator.clipboard.writeText(copiedContent.join('\t'));
  };

  const handlePaste = async () => {
    const clipboardData = await navigator.clipboard.readText();
    const clipboardRows = clipboardData.split('\n').filter(Boolean);

    const updatedCells = [...cells];

    clipboardRows.forEach((row, rowIndex) => {
      const clipboardCols = row.split('\t');

      clipboardCols.forEach((col, colIndex) => {
        const targetRow = selectedCells[rowIndex]?.rowIndex || 0;
        const targetCol = selectedCells[colIndex]?.colIndex || 0;

        updatedCells[targetRow + rowIndex] = updatedCells[targetRow + rowIndex] || [];
        updatedCells[targetRow + rowIndex][targetCol + colIndex] = col;
      });
    });

    setCells(updatedCells);
  };

  const handleCellDoubleClick = (rowIndex, colIndex) => {
    const cellContent = cells[rowIndex][colIndex];
    const newContent = prompt('Enter new content:', cellContent);
    if (newContent !== null && newContent !== undefined) {
      handleCellChange(rowIndex, colIndex, newContent);
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey) {
      switch (e.key) {
        case 'c':
          handleCopy();
          break;
        case 'v':
          handlePaste();
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    const handleDocumentMouseMove = (e) => {
      if (isDragging) {
        const rect = containerRef.current.getBoundingClientRect();
        const colWidth = rect.width / numCols;
        const rowHeight = rect.height / numRows;

        const colIndex = Math.floor((e.clientX - rect.left) / colWidth);
        const rowIndex = Math.floor((e.clientY - rect.top) / rowHeight);

        handleCellClick(rowIndex, colIndex, true);
      }
    };

    const handleDocumentMouseUp = () => {
      setIsDragging(false);
      setDragStart(null);
    };

    document.addEventListener('mousemove', handleDocumentMouseMove);
    document.addEventListener('mouseup', handleDocumentMouseUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDragging, cells, selectedCells, dragStart]);

  return (
    <div
      className="container mx-auto mt-8 border"
      onMouseDown={handleContainerMouseDown}
      onMouseUp={handleContainerMouseUp}
      ref={containerRef}
    >
      {Array.from({ length: numRows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: numCols }).map((_, colIndex) => (
            <div
              key={colIndex}
              className={`border p-2 flex-grow ${selectedCells.some(
                (cell) => cell.rowIndex === rowIndex && cell.colIndex === colIndex
              ) && 'bg-blue-200'}`}
              contentEditable={true}
              onMouseDown={(e) => handleCellClick(rowIndex, colIndex, e.shiftKey)}
              onInput={(e) => handleCellChange(rowIndex, colIndex, e.currentTarget.textContent)}
              onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
            >
              {cells[rowIndex][colIndex]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExcelPage;
