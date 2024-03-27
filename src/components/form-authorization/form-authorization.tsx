import './form-authorization.scss'
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {useAuthorizationUserQuery} from "@/api/api.ts";
import {useState} from "react";
import {LoaderMini} from "@/components/loader/loaderMini.tsx";
import {useAuthorizationActions} from "@/hooks/use-authorization-actions.ts";
import {FormUser} from "@/type/form-user.ts";

const formSchema = z.object({
    userName: z.string().min(1, {
        message: "Username не должен быть пустым",
    }),
    email: z.string().min(1, {
        message: "Email не должен быть пустым",
    }).email({
        message: "Email не корректный",
    }),
})

export const ProfileForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: "",
            email: "",
        },
    })
    const [formUser, setFormUser] = useState<FormUser | undefined>();
    const {data: user, isError, isFetching} = useAuthorizationUserQuery(formUser, {
        skip: formUser === undefined
    });
    const {successAuthorizationUser} = useAuthorizationActions();
    function onSubmit(values: z.infer<typeof formSchema>) {
        setFormUser(values)
    }

    if (!isError && user !== undefined && user.length !== 0) {
        successAuthorizationUser(user)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="form-main">
                    <FormField
                        control={form.control}
                        name="userName"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ketty2646" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ketty@googl.con" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="form-footer">
                    <Button type="submit">Submit</Button>
                    {isFetching && <div className="form-footer__loader"><LoaderMini/></div>}
                    {(!isError && !isFetching && formUser !== undefined) &&
                        <p className="error-text">Не верный логин или email</p>}
                    {isError && formUser !== undefined && <p className="error-text">Произошла непредвиденная ошибка</p>}
                </div>
            </form>
        </Form>
    )
}
