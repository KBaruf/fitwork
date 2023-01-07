import React from 'react';

const Filter = (data, searchValue) => {
  return data.filter((exercises) => {
    const { bodyPart, equipment, name, target } = exercises;
    if (bodyPart === searchValue || equipment === searchValue || target === searchValue || name === searchValue) {
      return exercises;
    }
  });
};

export default Filter;
