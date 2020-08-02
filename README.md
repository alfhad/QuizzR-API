# QuizzR API

## Endpoints:

### Grab a random question!
[https://quizzrapi.herokuapp.com/random](https://quizzrapi.herokuapp.com/random)

## Grab a random question with difficulty ranging from 1-5!

### Question with difficulty level 2:
[https://quizzrapi.herokuapp.com/difficulty/2](https://quizzrapi.herokuapp.com/difficulty/2)

## How these questions were collected

These questions were collected from different sources around the Internet.
In an attempt to make things easy for everyone.

### Make a contribution!

Submit a Pull Request, with your question added to the questions/index.json file. Make sure the question is in this format:

```javascript
{
  "id": last question id + 1,
  "difficulty": #(1-5),
  "question": "____?",
  "a": "",
  "b:: "",
  "c": "",
  "d": "",
  "answer": "(#)"(replace # -> option having correct answer)
}
```
