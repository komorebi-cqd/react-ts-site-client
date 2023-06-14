import { useEffect, useState, useCallback } from 'react'



function ThemeSwitcher() {
    const [mounted, setMounted] = useState<Boolean>(false);
    const [isDarkMode, setIsDarkMode] = useState<Boolean | undefined>(undefined);

    useEffect(() => {
        setMounted(true);
        setIsDarkMode(document.documentElement.classList.contains('dark'));
    }, []);


    useEffect(() => {
        if (!mounted || isDarkMode === undefined) return;
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDarkMode]);

    const onToggle = () => {
        setIsDarkMode(!isDarkMode);
    }
    if (!mounted) return null;
    return (
        <div className='absolute top-10 right-10'>
            <button onClick={onToggle} className='text-grey-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5'>
                <i className={`iconfont ${isDarkMode ? 'icon-taiyang text-red-300' : 'icon-banyue text-amber-200'} text-xl`}></i>
            </button>
        </div>
    )
}

export default ThemeSwitcher