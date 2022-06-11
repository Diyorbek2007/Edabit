## 49. Concatenate First and Last Name into One String

Given two strings, firstName and lastName, return a single string in the format "last, first".

**Notes:**

- Don't forget to return the result.
- If you get stuck on a challenge, find help in the Resources tab.
- If you're really stuck, unlock solutions in the Solutions tab.
  
**Examples:**

```js
    concatName("First", "Last") ➞ "Last, First"

    concatName("John", "Doe") ➞ "Doe, John"

    concatName("Mary", "Jane") ➞ "Jane, Mary"
```

**Tarjimasi:**

Ikkta string berilgan: firstName va lastName. "Oxirgi, birinchi" formatda stringni qaytaring

**Misol uchun:**

```js
    concatName("First", "Last") ➞ "Last, First"
    
    concatName("John", "Doe") ➞ "Doe, John"
    
    concatName("Mary", "Jane") ➞ "Jane, Mary"
```

**Manbalar:**

- [String.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Addition (+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Addition)