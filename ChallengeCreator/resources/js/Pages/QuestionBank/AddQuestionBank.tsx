import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/shadcn/ui/card"
import { Input } from "@/shadcn/ui/input"
import { Label } from "@/shadcn/ui/label"
import { Button } from '@/shadcn/ui/button';
import { Menu } from '../Menu';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">New Question Bank</h2>}>
            <Head title="New Question Bank" />
                <div className="mt-10 mb-10 max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <Menu></Menu>
                        <Card>
                            <CardHeader>
                            <CardTitle className="text-3xl font-bold">Add Question Bank</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                        <Label htmlFor="name" className="text-xl font-bold">Question bank name</Label>
                                            <Input id="name" placeholder="Name of your question bank" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                        </div>
                                    </div>
                                    <Button type='submit'>
                                        <Link href={route('testlist')}>
                                            Add question bank
                                        </Link>
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
        </AuthenticatedLayout>
    );
}