## 30. Profitable gamble

Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

**Notes:**

- A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.
- 
**Examples:**

```js
    profitableGamble(0.2, 50, 9) ➞ true

    profitableGamble(0.9, 1, 2) ➞ false

    profitableGamble(0.9, 3, 2) ➞ true
```

**Tarjimasi:**

Prob, prize, to'lov va prob * prize > to'lash bo'lsa, rost qiymatini qaytaradigan uchta argumentni oladigan funksiya yarating; aks holda false qaytaring.

Tasavvur qilish uchun:

profitableGamble(0.2, 50, 9)

... rost bo'lishi kerak, chunki sof foyda 1 (0,2 * 50 - 9) va 1 > 0 ga teng.

**Misol uchun:**

```js
    profitableGamble(0.2, 50, 9) ➞ true
    
    profitableGamble(0.9, 1, 2) ➞ false
    
    profitableGamble(0.9, 3, 2) ➞ true
```

**Manbalar:**

- [Arethmetic operators](https://developer.mozilla.org/en-US/docs/web/javascript/reference/operators)
- [Arethmetic operators](https://www.w3schools.com/js/js_arithmetic.asp)
- [If-else/else-if](https://www.w3schools.com/js/js_if_else.asp)