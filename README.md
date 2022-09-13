# Frontend Assessment
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ec4705c2ad4f4922b1acb1b22a765862)](https://app.codacy.com/gh/kehindeBankole/kehinde-starter?utm_source=github.com&utm_medium=referral&utm_content=kehindeBankole/kehinde-starter&utm_campaign=Badge_Grade_Settings)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a88ecc47425a4a45931dbf52b9315912)](https://www.codacy.com/gh/kehindeBankole/kehinde-starter/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=kehindeBankole/kehinde-starter&amp;utm_campaign=Badge_Grade)

---

Build and deploy a very simple frontend app for paginated data, that does the following

1.  Fetches (randomised) data from `https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84` which can be paged by appending `&page=N` where N is the page you want to fetch. E.g appending `&page=1` retrieves the first page, while `&page=4` retrieves the 4th page.

2.  Displays the fetched data in a HTML table with 5 rows (the API only returns 5 records), and allows the user to page next/previous with buttons in the UI

See full details and instructions (including an interesting paging caveat) in this [Google Doc](https://docs.google.com/document/d/1hGXXPykXqO6b9Z2pm55-2T83AIA39cQ3FQxtbGkoR5Y)

#### Note

1.  This comes as a purely HTML/CSS/JS project with [Parcel](https://parceljs.org/docs/) handling build and transpilation.
2.  We strongly recommend you complete the challenge with this setup, and only use a framework (like Vue/react/Angular) only if absolutely necessary and for which you will be required to provide reasonable justification as part of your evaluation
