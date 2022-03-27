
Today I was asked by a Wechat friend that How I do KM(knowledge Management), here goes my answer. As a typical Unix hacker I tend to stay in plaintext as much as possible. cause I believe the content are just most refactorable, searchable and exportable this way. Now let me elaborate the ideas a bit and show you some of my pragmatic tricks.

## Be Highly Refactorable


Edocs is my personal knowledge base. It's sort of structured as a little wiki, but file naming goes really messy, and I don't really mind. Copy, paste, delete happen all the time. Inside one document, I use markdown as the format, as all developers should.

The thing is when I know enough about one topic. I make a blog, then videos course and maybe  books later. 

Knowledge is a living tree. Things evolving all the time, so staying in plaintext provides all the flexibility  I need.

## Be Easily Searchable

VScode or any other text editor can be used to search plaintext. For published stuff, I use google and in-site search engine like Algolia.

Open edocs as a folder with VScode, type keywords and you get everything.

Google helps a lot, when I am search my blogs. Say I type "王广忠 比特币", then I got all the Bitcoin related articles I wrote before.

For in-site search, I use Algolia. some of my  books  are hosted at https://book.haoqicat.com/   , they are all free ebooks, and Algolia has a free plan for open source docs. Type something, Algolia will get you there

So guys, throw away your paper and pen, go digital, go searchable. It's a one million dollar life advice from Peter.

## Be Beautifully Exportable

Plaintext is not beautiful enough to attract your workmates or customers, we also need different formats sometimes, like pdf, imgs, html and so on.

Top of them all, we need good-looking html. Open a markdown document with VScode, type Shift-Cmd-V, then you get into markdown preview mode. Copy the html, paste it in shimo.im. Now we are free to share this doc with workmates,  with things editable or not, or we can export as jpg or pdf. 

Big question is how to store our images. I personally need a way to escape rich text editors, sure, If I use zhihu editor or shimo, drag and drog can be used to add images. But then it's no longer plaintext, and can be troublesome copying to somewhere else. So the solution is to set up my own image host. Upload the images and then get a URL for each one of them. Then  it willl be easy to add image in markdown without breaking it's plaintext nature. It's even possible to preview the image in VScode and  paste the doc to Zhihu, without losing the images.

So please use plaintext as the base data format, and  export things to any format when needed.

## Conclusion

You don't need to be a hacker to use plaintext well. But you do need to be willing to learn a bit about Git and Bash/Python scripting to be a real power user. I use gitbook as my book format, I don't use rich text editor very often, but nowadays I find myself use shimo.im more, especially when I am traveling, since it's really nice to do editing on cellphone, export the writing as a image, and share it with Wechat.
