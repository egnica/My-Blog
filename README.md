# Late Start Dev - My Blog

Late Start Dev is a personal blog documenting the experience of learning web development later in life.

The blog features life lessons learned, code experiments, project breakdowns, and honest reflections on what it means to grow as a developer outside of the traditional career timeline. The name itself plays two roles. It's a reference to both starting a tech career later than most, and the broader idea that it's never too late to pursue something new.

Built with Next.js and deployed via AWS Amplify, the blog uses Amazon S3 for media storage and markdown for content flexibility. It’s lightweight, SEO-optimized, and purposefully minimal to keep the focus on clarity and consistency.

Late Start Dev is an evolving record of progress, persistence, and the belief that momentum matters more than timing.

## Shared blog content

Post content is maintained in the canonical `blog.js` file in
`egnica/new-nicholasegner.com`.

nicholasegner.com imports that JavaScript source directly and exposes the live,
serializable post data at:

`https://www.nicholasegner.com/api/blog`

Late Start Dev reads that endpoint and revalidates the feed every 60 seconds, so
there is only one post source to maintain across both sites.
