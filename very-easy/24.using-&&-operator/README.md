## 24. Using the "&&" Operator

JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:

a is checked if it is true or false.
If a is false, false is returned.
b is checked if it is true or false.
If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true ).
The && operator will only return true for true && true.

Make a function using the && operator.

**Notes:**

- N/A

**Examples:**

```js
    and(true, false) ➞ false

    and(true, true) ➞ true

    and(false, true) ➞ false

    and(false, false) ➞ false
```

**Tarjimasi:**

JavaScript mantiqiy operatoriga ega &&. && operatori ikkita mantiqiy qiymatni oladi va ikkala qiymat ham rost bo'lsa, true qiymatini qaytaradi.

a && b ni ko'rib chiqing:

a to'g'ri yoki noto'g'ri ekanligi tekshiriladi.
Agar a noto'g'ri bo'lsa, false qaytariladi.
b rost yoki noto'g'ri ekanligi tekshiriladi.
Agar b noto'g'ri bo'lsa, false qaytariladi.
Aks holda, true qaytariladi (chunki a va b ham true ).
&& operatori faqat true && rost uchun rostni qaytaradi.

&& operatori yordamida funksiya yasang.

**Misol uchun:**

```js
    and(true, false) ➞ false
    
    and(true, true) ➞ true
    
    and(false, true) ➞ false
    
    and(false, false) ➞ false
```

**Manbalar:**

- [Logical operators](https://developer.mozilla.org/en-US/docs/web/javascript/reference/operators)
- [Logical operators](https://www.w3schools.com/jsref/jsref_operators.asp)
- [Logical operators](https://javascript.info/logical-operators)