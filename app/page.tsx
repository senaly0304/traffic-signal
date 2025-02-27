export default function Home() {
  return (
    <main className='grid h-dvh place-items-center bg-zinc-900'>
      <div className='grid w-80 grid-cols-3 bg-gradient-to-t from-zinc-900 gap-5 rounded-full shadow-[0_1px_rgba(255,255,255,0.1)_inset,0_0_20px_#111] border border-zinc-800 bg-zinc-800 p-6 *:aspect-square *:overflow-hidden *:bg-black/40 *:rounded-full *:relative *:after:absolute *:after:inset-0 *:after:bg-[size:5px_5px] *:after:bg-[radial-gradient(circle,rgba(0,0,0,0.8)_30%,transparent_30%)] [&_:hover]:bg-current *:transition-all *:duration-500 [&_:hover]:shadow-[0_0_10px_black_inset,0_0_20px] *:shadow-[0_0_10px_rgba(0,0,0,0.4)_inset,0_0_20px_transparent] *:border *:border-zinc-950/80'>
        <div className='text-green-500' />
        <div className='text-yellow-500' />
        <div className='text-red-500' />
      </div>
    </main>
  );
}
