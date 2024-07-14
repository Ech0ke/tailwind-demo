import "./App.css"
import { Button } from "./components/Button/Button"
import { VariantButton } from "./components/VariantButton/VariantButton"
import { users } from "./user"
import MDText from "./sample.md"
import ReactMarkdown from "react-markdown"
// https://tailwindcomponents.com/cheatsheet/

// https://tailwindcss.com/docs/reusing-styles

function App() {
  return (
    <div className="min-h-screen bg-slate-800 p-8 space-y-11">
      <h1 className="text-center text-4xl text-white mb-48">Tailwind Demo</h1>
      {/* DIVIDE */}
      <div className="flex flex-col  text-white w-fit">
        <a className="hover:text-green-300" href="https://www.google.com">
          Link 1
        </a>
        <a className="hover:text-green-300" href="https://www.google.com">
          Link 2
        </a>
        <a className="hover:text-green-300" href="https://www.google.com">
          Link 3
        </a>
        <a className="hover:text-green-300" href="https://www.google.com">
          Link 4
        </a>
        <a className="hover:text-green-300" href="https://www.google.com">
          Link 5
        </a>
      </div>

      <div className="mt-3 flex -space-x-2">
        {users.map((user) => (
          <img
            key={user.name}
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            src={user.avatarUrl}
            alt={user.name}
          />
        ))}
      </div>

      {/* CUSTOM COMPONENT */}
      {/* ADD className="ring-2 ring-white" */}
      <Button type="button">Click me!</Button>
      <VariantButton variant="solid">Variant 1</VariantButton>
      <VariantButton variant="outline">Variant 2</VariantButton>
      <VariantButton variant="ghost">Variant 3</VariantButton>
      {/* SIZE */}
      <div className="bg-zinc-100 w-52 h-52 rounded-lg"></div>
      <div className="relative mr-4 h-[42px] w-[42px] rounded-full">
        <img
          src="https://cdn.tailgrids.com/2.2/assets/core-components/images/avatar/image-05.jpg"
          alt="avatar"
          className="h-full w-full rounded-full object-cover object-center"
        />
        <span className="absolute -right-0.5 -top-0.5 block h-[14px] w-[14px] rounded-full border-[2.3px] border-white bg-[#219653] dark:border-dark"></span>
      </div>

      <p className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi
        adipisci, in facere tenetur amet autem excepturi sint facilis veniam eos
        eligendi provident incidunt laborum dolorum doloribus non!
        Necessitatibus tempora dolorem, deserunt ratione nesciunt nulla ullam
        provident nemo fugit molestias magni sapiente doloribus cupiditate
        obcaecati amet recusandae inventore magnam consectetur eius porro?
        Inventore cum dolores soluta repellat officiis eius, tenetur nihil
        deleniti sapiente deserunt excepturi, dignissimos autem rem dolore
        minus? Nulla fugiat dolore officia tenetur, rerum, veritatis molestias
        repellat at voluptatum quibusdam pariatur sequi harum laudantium ad est
        impedit possimus dignissimos similique alias consequuntur cumque neque!
        Quod, error a. Temporibus?
      </p>

      <h1 className="text-center text-4xl text-white mb-48">
        Tailwind Markdown
      </h1>
      <div className="relative w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1">
        <div className="prose">
          <ReactMarkdown children={MDText} />
        </div>
      </div>
    </div>
  )
}

export default App
