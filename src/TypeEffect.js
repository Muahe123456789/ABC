import React, { useState, useEffect } from 'react';

const TypeEffect = () => {
  const [charIndex, setCharIndex] = useState(0); // Chỉ số ký tự hiện tại
  const [phraseIndex, setPhraseIndex] = useState(0); // Chỉ số cụm từ hiện tại
  const phrases = ['Face', 'Body', 'Sun', 'Men','Eyes','Lips']; // Các cụm từ hiển thị

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]; // Cụm từ hiện tại

    const typingTimeout = setTimeout(() => {
      // Thêm từng ký tự
      setCharIndex((prev) => prev + 1);

      // Khi hoàn tất cụm từ
      if (charIndex === currentPhrase.length) {
        setTimeout(() => {
          // Chuyển sang cụm từ tiếp theo sau khi hoàn tất từ hiện tại
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length); // Lặp lại cụm từ
        }, 300); // Dừng một chút trước khi chuyển từ mới
      }
    }, 200); // Tăng tốc độ để mượt hơn (200ms giữa các ký tự)

    return () => clearTimeout(typingTimeout); // Dọn dẹp timeout khi component unmount hoặc thay đổi
  }, [charIndex, phraseIndex, phrases]);

  return (
    <span>
      {phrases[phraseIndex].slice(0, charIndex)}
    </span>
  );
};

export default TypeEffect;
