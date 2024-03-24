import './authorization-user.scss'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button.tsx";
import {ProfileForm} from "@/components/form-authorization/form-authorization.tsx";

export const AuthorizationUser = () => {


    return (
        <Dialog>
            <DialogTrigger className="current-user__authorization">
                <Button>
                    Войти
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Введите UserName и Email</DialogTitle>
                    <DialogDescription>
                        <ProfileForm />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}