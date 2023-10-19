//import Login from "@components/Login";
//import ProblemsTable from "@components/ProblemsTable";
//import { Sandpack } from '@codesandbox/sandpack-react';
//import { nightOwl } from "@codesandbox/sandpack-themes";
//import ProblemsTable from "@components/ProblemsTable";
//import DocsQA from "@components/DocsQA";
import Link from 'next/link';
import { currentUser } from '@clerk/nextjs';


const Home = () =>  (
    <section className='w-full flex-center flex-col bg-gradient-to-r min-h-screen from-blue-300 via-teal-300 to-violet-400'>
        <h1 className='head_text text-center'>
          Gurukul
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> AI-Powered Code Mentor</span>
        </h1>
        <p className='desc text-center'>
          An AI powered learning assistant Code Mentor for students to learn code.
        </p>
        {/* <Login /> */}
        {/* <ProblemsTable /> */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link href="/qna" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Study
          </Link>
          <Link href="/problemstable" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300">
              Practice
          </Link>
        </div>
    </section>
  );


export default Home;