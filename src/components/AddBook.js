import React from 'react';

export default function AddBook() {
  return (
    <div>
      <h2>
        ADD NEW BOOK
      </h2>
      <form>
        <input placeholder="Book Title" />
        <input placeholder="Book Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
