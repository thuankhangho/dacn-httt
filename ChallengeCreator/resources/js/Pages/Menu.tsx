import { Menubar } from "@/shadcn/ui/menubar";
import { Link } from "@inertiajs/react";

export function Menu() {
    return (
        <Menubar className="flex justify-evenly w-full mb-4">
            <Link href={route('testlist')} className="text-white-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Tests
            </Link>
            <Link href={route('questionbanks.index')} className="text-white-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Questions
            </Link>
            <Link href={route('category')} className="text-white-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Categories
            </Link>
            <Link href={route('member')} className="text-white-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Members
            </Link>
            {/* Needs qbID here */}
            <Link href={route('questionbanks.edit',"2")} className="text-white-1 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                Settings
            </Link>
        </Menubar>
    )
}
