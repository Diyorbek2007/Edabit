## 29. Equality check

In this challenge, you must verify the equality of two different values given the parameters a and b.

Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

Numbers
Strings
Booleans (false or true)
Special values: undefined, null and NaN
What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

Implement a function that returns true if the parameters are equal, and false if they are not.

**Notes:**

- If you get stuck on a challenge, find help in the Resources tab.
- If you're really stuck, unlock solutions in the Solutions tab.
**Examples:**

```js
    checkEquality(1, true) ➞ false
    // A number and a boolean: the value and type are different.

    checkEquality(0, "0") ➞ false
    // A number and a string: the type is different.

    checkEquality(1,  1) ➞ true
    // A number and a number: the type and value are equal.
```

**Tarjimasi:**

Ushbu qiyinchilikda siz a va b parametrlari berilgan ikki xil qiymatning tengligini tekshirishingiz kerak.

Parametrlarning qiymati ham, turi ham teng bo'lishi kerak. Berilgan parametrlarning mumkin bo'lgan turlari:

Raqamlar
Satrlar
Mantiqiy (noto'g'ri yoki to'g'ri)
Maxsus qiymatlar: undefined, null va NaN
Bitta bayonot bilan ikki xil tekshirishni (qiymat va turdagi) bajarishga imkon beradigan nimalarni bilib oldingiz?

Parametrlar teng bo'lsa, rost, teng bo'lmasa, noto'g'ri qiymatini qaytaradigan funktsiyani amalga oshiring.

**Misol uchun:**

```js
    checkEquality(1, true) ➞ false
    // A number and a boolean: the value and type are different.
    
    checkEquality(0, "0") ➞ false
    // A number and a string: the type is different.
    
    checkEquality(1,  1) ➞ true
    // A number and a number: the type and value are equal.
```

**Manbalar:**

- [Difference between == and === operators in Javascript](https://www.geeksforgeeks.org/difference-between-and-operator-in-javascript/)
- [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Typeof operator](https://www.w3resource.com/javascript/operators/typeof.php)