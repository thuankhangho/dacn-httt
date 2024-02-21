import { columns } from "./TestTable/TestColumn"
import { data } from "./TestTable/TestData"
import { DataTable } from "./TestTable/TestTable"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button } from "@/shadcn/ui/button";
import { Menu } from "../Menu";
import { QB } from "../QuestionBank/QuestionBankType";

export default function TestList({ auth, QBank }: PageProps<{ QBank: QB }>) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">All tests</h2>}>
            <Head title="Tests" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <Menu QBank={QBank}></Menu>
                </div>
                <div className="container mx-auto">
                    {/* <div className="flex justify-between">
                        <h3>All tests</h3>
                    </div> */}
                    <DataTable columns={columns} data={data} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
