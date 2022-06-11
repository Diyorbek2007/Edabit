## 40. Compare strings by count of characters

In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

Keep your code clean and readable.
While not violating the first principle: get rid of everything superfluous.
In order to achieve this you should:

Deepen your knowledge of logics.
Deepen your understanding of the particular language you're coding with.
I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.

Goal
In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.

Write a function that returns true if the given integer is even, and false if it's odd.

Tips
Using an if statement in order to return boolean or to set a variable to a boolean is redundant.

A function that returns true if a person's age is 18 or greater and false otherwise, could be written as:

**Notes:**

- Don't forget to return the result.
- If you get stuck on a challenge, find help in the Resources tab.
- If you're really stuck, unlock solutions in the Solutions tab.
  
**Examples:**

```js
    function legalAge(age) {
      if(age >= 18) {
        return true
      }
      else {
        return false
      }
    }
```

**Tarjimasi:**

Ushbu seriyada biz kodimizni keraksiz darajada murakkablashtiradigan va kamroq o'qilishi mumkin bo'lgan umumiy ortiqcha va ortiqcha narsalarni ko'ramiz va ulardan qanday qochish kerakligini o'rganamiz.

Seriyaning ruhiga muvofiq, biz minimalist kodning umumiy qoidalarini ikkita oddiy printsipda umumlashtirishimiz mumkin:

Kodingizni toza va o'qilishi mumkin saqlang.
Birinchi tamoyilni buzmasdan: ortiqcha narsalardan xalos bo'ling.
Bunga erishish uchun sizga kerak:

Mantiq bo'yicha bilimingizni chuqurlashtiring.
Kodlashayotgan tilni tushunishingizni chuqurlashtiring.
Men ham qo'shimcha qilaman: kuzating va professionallardan o'rganing. Edabit-da muammoni hal qilgandan so'ng Yechimlar yorlig'ini tekshirishni odat qiling. Birovning kodlash uslubining xususiyatlarini o'zlashtirishda mutlaqo noto'g'ri narsa yo'q, ayniqsa sizniki hali to'liq ishlab chiqilmagan bo'lsa.

Maqsad
Kod yorlig'ida siz testlardan o'tish uchun bitta belgi etishmayotgan kodni topasiz. Biroq, SIZNING MAQSADINGIZ funksiyani imkon qadar minimalist tarzda taqdim etishdir. Quyidagi Maslahatlar bo'limidagi maslahatlardan foydalaning.

Berilgan butun son juft bo‘lsa rost, toq bo‘lsa yolg‘on qaytaradigan funksiya yozing.

Maslahatlar
Booleanni qaytarish yoki o'zgaruvchini mantiqiy qiymatga o'rnatish uchun if iborasidan foydalanish ortiqcha.

Agar odamning yoshi 18 yoki undan katta bo'lsa, rost, aks holda noto'g'ri deb qaytaradigan funksiya quyidagicha yozilishi mumkin:

**Misol uchun:**

```js
    function legalAge(age) {
      if(age >= 18) {
        return true
      }
      else {
        return false
      }
    }
```

**Manbalar:**

- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Logical NOT(!)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)