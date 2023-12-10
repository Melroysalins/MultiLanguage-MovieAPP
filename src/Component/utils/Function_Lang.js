function transliterateToHindi(name) {
    const transliterationMap = {
      a: 'ए',
      b: 'बी',
      c: 'सी',
      d: 'डी',
      e: 'ई',
      f: 'एफ',
      g: 'जी',
      h: 'एच',
      i: 'आई',
      j: 'जे',
      k: 'के',
      l: 'एल',
      m: 'एम',
      n: 'एन',
      o: 'ओ',
      p: 'पी',
      q: 'क्यू',
      r: 'आर',
      s: 'एस',
      t: 'टी',
      u: 'यू',
      v: 'वी',
      w: 'डब्ल्यू',
      x: 'एक्स',
      y: 'वाई',
      z: 'जेड',
      ' ': ' ',
    };
  
    const lowercaseName = name.toLowerCase();
    let transliteratedName = '';
  
    for (const letter of lowercaseName) {
      transliteratedName += transliterationMap[letter] || letter;
    }
  
    return transliteratedName;
  }
  
  // Example usage:
  const englishName = 'Margot Robbie';
  const hindiName = transliterateToHindi(englishName);
 // Output: कोरी हॉकिन्स
  