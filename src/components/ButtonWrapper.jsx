import { FiSend } from "react-icons/fi";

const ButtonWrapper = () => {
  return (
    <div className="bg-white dark:bg-black min-h-[200px] flex items-center justify-center scale-125 bg-clip-text mt-0 pt-0 -translate-y-12 mb-0 pb-0">
      <NeumorphismButton />
    </div>
  );
};

const NeumorphismButton = () => {
  return (
    <button
      className={`
        px-4 py-2 rounded-full 
        flex items-center gap-2 
        text-gray-600
        dark:text-gray-300
        border-2 
        border-gray-300/80
        dark:border-2
        dark:border-gray-400
        dark:shadow-[-5px_-5px_10px_rgba(10,_10,_10,_0.8),_5px_5px_10px_rgba(75,_75,_75,_0.25)]
        bg-clip-content

        transition-all
        duration-500

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.3),_1px_1px_5px_rgba(0,_0,_0,_0.15),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.5),inset_2px_2px_4px_rgba(0,_0,_0,_0.1)]
        dark:hover:shadow-[-1px_-1px_5px_rgba(55,_55,_55,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(55,_55,_55,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-black/80
        hover:border-black/20
        dark:hover:text-white
        dark:hover:border-gray-300
    `}
    >
      <FiSend />
      <span>Send</span>
    </button>
  );
};

export default ButtonWrapper;