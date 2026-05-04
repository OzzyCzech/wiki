---
title: Kindle
description: Kindle tips — sending documents, managing content, converters, and Calibre setup.
created: 2023-02-20
updated: 2025-10-02
---

## Send to kindle

Supported file types: PDF, DOC, DOCX, TXT, RTF, HTM, HTML, PNG, GIF, JPG, JPEG, BMP, EPUB

https://www.amazon.com/sendtokindle

## Manage digital content

Manage Your [Content](https://www.amazon.com/hz/mycd/digital-console/contentlist/pdocs) and Devices

## Converters

Convert anything to [AZW3](https://convertio.co/azw3-converter/) format.

## Calibre

Calibre is a powerful and easy to use e-book manager. Users say it’s outstanding and a must-have.
It’ll allow you to do nearly everything, and it takes things a step beyond normal e-book software.
It’s also completely free and open source and great for both casual users and computer experts.

https://calibre-ebook.com/download

I am changing following settings in the Calibre:

### Add books to Library

I am using the following regex to add books to the library:

```text
(?P<author>.+?)(?: - (?P<series>.+) (?P<series_index>[0-9]+?))? - (?P<title>.+)
```

this template parse the following file name:

```text
Rowling, Joanne Kathleen - Harry Potter 1 - Harry Potter and the Philosopher´s Stone.epub
```

and creates the those metadata about the book:

- **Author**: `Rowling, Joanne Kathleen`
- **Series**: `Harry Potter`
- **Series index**: `1`
- **Title**: `Harry Potter and the Philosopher´s Stone`

### Save to disk

```text
{author_sort[0]}/{author_sort}/{authors} - {series}{series_index:0>2s| | - }{title}
```

Will save the file to the following path:

```text
R/Rowling, Joanne Kathleen/Rowling, Joanne Kathleen - Harry Potter 01 - Harry Potter and the Philosopher´s Stone.epub
```

File format is same as the original file name for very easy search and find. Series index is padded with
zeros to have always two digits. Series and series index are added only if they are present in the metadata.

## Send to device (Kindle)

```text
{author_sort[0]}/{author_sort}/{series:|| }{series_index:0>2s|[|] } {title} - {authors}
```

Will crete the following file name on the device:

```text
R/Rowling, Joanne Kathleen/Harry Potter [01] - Harry Potter and the Philosopher´s Stone - Rowling, Joanne Kathleen.epub
```
