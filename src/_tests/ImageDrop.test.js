import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ImageDrop from '../components/ImageDrop';

describe('ImageDrop', () => {
  it('updates imageUrl state when image is uploaded', () => {
    const mockHandleSetImage = jest.fn();

    render(<ImageDrop imageUrl="" handleSetImage={mockHandleSetImage} />);

    const file = new File(['(⌐□_□)'], 'test.jpg', { type: 'image/jpeg' });
    const fileInput = screen.getByTestId('imageUpload');

    Object.defineProperty(fileInput, 'files', {
      value: [file],
    });

    fireEvent.change(fileInput);

    setTimeout(() => {
      expect(mockHandleSetImage).toHaveBeenCalledWith(
        'data:image/jpeg;base64,(⌐□_□)',
      );
    }, 100);
  });
});
