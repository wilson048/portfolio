import Image from "next/image";

export default function Home() {
  return (

    // <div className="flex items-center">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
    //   </main>
    // </div>
     <section className="">
      <h1 className="mb-8 flex text-2xl font-semibold tracking-tighter justify-center">
        My Portfolio
      </h1>
      {/* <p className="mb-2 flex flex-col text-center h-full">
        {`こんにちは！　コンピュータ専門の卒業したのチュヴルソンです。
        日本語は最初言語ではないですが、けどこの言語が好きです。
        今、仕事景気は悪いですが無職だ。
        実に俺も怠惰ですから仕事を探したくない。
        多くの人々は俺が知らないことがアメリカとカナダの国民。国民の二つです！`}
      </p> */}
      <div className="my-8 flex flex-col h-full text-center">
        {`Some people in this world really need to know what it feels like to get punched in the face.
        These days, in our digital age, there is too little consequence for being a complete dingus to other people, 
        which is behavior that would be completely unacceptable in any in-person setting.`}
        {/* <BlogPosts /> */}
      </div>
    </section>
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
    //   </main>
    // </div>
  );
}
