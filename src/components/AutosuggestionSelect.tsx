import cn from 'clsx';
import { useEffect, useRef } from 'react';
import arrow from '../assets/svg/arrow.svg';
import { useToggle } from '../hooks/useToggle';

import './AutosuggestionSelect.css';

import { useEventListener, useOnClickOutside } from 'usehooks-ts';

type Item = {
  id: number;
  label: string;
};

type AutosuggestionSelectProps = {
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  status: 'idle' | 'loading' | 'success' | 'error';
  items: Item[];
  onItemClick: (item: Item) => void;
};

export const AutosuggestionSelect = ({
  label,
  value,
  onValueChange,
  status,
  onItemClick,
  items,
}: AutosuggestionSelectProps) => {
  const autosuggestionSelectRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isActive, toggle] = useToggle();

  console.log({ items });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  const handleOpen = () => {
    toggle(true);
  };

  const handleClose = () => {
    toggle(false);
    onValueChange('');
  };

  useOnClickOutside(autosuggestionSelectRef, handleClose);
  useEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  });

  const handleToggle = () => {
    isActive ? handleClose() : handleOpen();
  };

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus();
    }
  }, [isActive, inputRef]);

  const handleOnItemClick = (item: Item) => () => {
    onItemClick(item);
    onValueChange('');
    handleClose();
  };

  return (
    <div className="wrapper" ref={autosuggestionSelectRef}>
      <div className="select">
        <button
          className={cn('trigger', {
            ['trigger--active']: isActive,
          })}
          onClick={handleToggle}
        >
          {label}
          <img src={arrow} alt="chevron down icon" className="arrow" />
        </button>
        {isActive && (
          <div className="options">
            <input
              className="input"
              placeholder="Type to search..."
              value={value}
              onChange={handleInputChange}
              ref={inputRef}
            />
            <div className="results-container">
              {status !== 'idle' && status === 'loading' && (
                <div>Loading...</div>
              )}
              {status === 'error' && <div>Error</div>}
              {status === 'success' && items.length === 0 && (
                <div>No results</div>
              )}
              {status === 'success' && (
                <ul className="list">
                  {items.map((item) => (
                    <li
                      className="list__item"
                      key={item.id}
                      onClick={handleOnItemClick(item)}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
