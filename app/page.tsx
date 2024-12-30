import { allBlogs } from 'contentlayer/generated';
import Script from "next/script";
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <section>
        <h1 className="flex font-semibold text-3xl mb-8 tracking-tighter">Hey, I'm Dev 
          <div className='bg-transparent dark:bg-white ml-2 mt-[0px] p-1' style={{borderRadius: "50%"}}><Image className='' width={30} height={30} alt="Gojo Satoru" src={"/icon.png"} /></div>
        </h1>
        <p className="prose prose-neutral dark:prose-invert">
          I am a <strong>code monkey</strong>.
        </p>
        <p className="prose prose-neutral dark:prose-invert">
          I sometimes write.
        </p>
        <p className="prose prose-neutral dark:prose-invert">
          I developed a certain likeliness towards coding ever since I wrote my first Hello World script in Python. I love learning new technologies and sharing my learnings whenever I can.
        </p>
        <p>I am currently learning <del className="prose prose-neutral dark:prose-invert">c++</del>, <del className="prose prose-neutral dark:prose-invert">python</del>, <del className="prose prose-neutral dark:prose-invert">java</del>, <del className="prose prose-neutral dark:prose-invert">django</del>, <del className="prose prose-neutral dark:prose-invert">javascript</del>, <strong><ins className="no-underline">mern stack.</ins></strong></p>
        <p>I am currently working on <del className="prose prose-neutral dark:prose-invert">my blog</del>, <del className="prose prose-neutral dark:prose-invert">trading skills</del>, <del className="prose prose-neutral dark:prose-invert">math</del>, <del className="prose prose-neutral dark:prose-invert">programming</del>, <del className="prose prose-neutral dark:prose-invert">writing skills</del>, <del className="prose prose-neutral dark:prose-invert">open source django projects</del>, <strong><ins className="no-underline">structure and interpretation of computer programs.</ins></strong></p>
      </section>
      <section>
        <h2 className="font-semibold text-2xl mt-8 tracking-tighter">Advice💡</h2>
        <small>Not mine, (and better for it)</small>
        <div className="my-4 flex flex-col space-y-4 w-full">
          <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-6 py-4 w-full"
            href="http://www.cs.virginia.edu/~robins/YouAndYourResearch.html">
            <div className="flex flex-col">
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                Hamming's classic "You and your research" might as well have been called "you and your work".
              </p>
            </div>
            <div className="text-neutral-700 dark:text-neutral-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
        </div>
      </section>
      <section>
        <h2 className="font-semibold text-2xl mt-8 tracking-tighter">Favourite Posts</h2>
        <p>&nbsp;</p>
        <ul className="list-disc list-inside">
          <li>
            <a className="" href="https://stackoverflow.blog/2022/12/30/you-should-be-reading-academic-computer-science-papers/">You should be reading academic computer science papers
              <svg className="ml-2 inline" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
            </a>
          </li>
          <li><a className="" href="https://www.reddit.com/r/programming/comments/17qgbx8/10_hardtoswallow_truths_they_wont_tell_you_about/">10 hard-to-swallow truths they won't tell you about software engineer job
          </a></li>
          <li><a className="" href="https://www.reddit.com/r/programming/comments/17p95v7/speed_up_a_program_for_the_50_years_old_processor/">Speed up a program for the 50 years old processor by 180000%</a></li>
        </ul>
      </section>
      <section>
        <h2 className="font-semibold text-2xl mt-8 tracking-tighter">Latest Posts✍️</h2>
        {allBlogs.sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
          .slice(0, 3)
          .map((post) => (
            <div className="my-4 flex flex-col space-y-4 w-full">
              <a className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50  dark:bg-neutral-800 rounded flex items-center justify-between px-6 py-4 w-full"
                href={post.slug}>
                <div className="flex flex-col">
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                    {post.title}
                  </p>
                </div>
                <div className="text-neutral-700 dark:text-neutral-300">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path>
                  </svg>
                </div>
              </a>
            </div>
          ))}
      </section>
    </div>
  );
}
