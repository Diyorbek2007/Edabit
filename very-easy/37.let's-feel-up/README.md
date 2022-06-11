## 37. Let's fuel up!

A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.

Create a function which calculates the amount of fuel it needs, given the distance.

**Notes:**

- Distance will be a number greater than zero.
- Return 100 if the calculated fuel turns out to be less than 100.
  
**Examples:**

```js
    calculateFuel(15) ➞ 150

    calculateFuel(23.5) ➞ 235

    calculateFuel(3) ➞ 100
```

**Tarjimasi:**

Avtotransport vositasi bosib o'tgan masofadan 10 baravar ko'p yoqilg'iga muhtoj. Biroq, yo'lga chiqishdan oldin har doim kamida 100 ta yoqilg'i olib yurishi kerak.

Masofani hisobga olgan holda kerakli yoqilg'i miqdorini hisoblaydigan funktsiya yarating.

**Misol uchun:**

```js
    calculateFuel(15) ➞ 150
    
    calculateFuel(23.5) ➞ 235
    
    calculateFuel(3) ➞ 100
```

**Manbalar:**

- [Conditional Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)
- [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)