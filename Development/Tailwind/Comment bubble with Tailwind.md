---
title: Comment bubble with Tailwind
description: How to create a comment bubble component using Tailwind CSS utility classes.
created: 2022-06-03
updated: 2026-04-06
---

```html
<div
  class="
	 relative
	 bg-gray-500 text-white
	 inline-block text-center 
	 min-w-[2rem]
	 rounded
	 py-1 px-1.5 	 
	 
	 after:content-[''] 
	 after:pointer-events-none
	 after:border-4 
	 after:border-gray-500 
	 after:top-full
	 after:right-[15%]
	 after:absolute
	 after:z-50 
	 after:border-l-transparent
	 after:border-b-transparent
"
>
  50
</div>
```

https://play.tailwindcss.com/6MOkpPmqmu
