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

export const AuthorizationUser = ({isAuthorization}: { isAuthorization: boolean }) => {
    const titleAuthorization: string = isAuthorization
        ? "Вы уверены?"
        : "Введите UserName и Email"

    return (
        <Dialog>
            <DialogTrigger className="current-user__authorization">
                <Button>
                    {!isAuthorization ? "Выйти" : "Войти"}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{titleAuthorization}</DialogTitle>
                    <DialogDescription>
                        {!isAuthorization ? <LogoutButtons/> : ""}
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

const LogoutButtons = () => {
  return (
      <>
          <DialogTrigger >
              <Button>
                  Выйти
              </Button>
          </DialogTrigger>
          <DialogTrigger >
              <Button>
                  Отмена
              </Button>
          </DialogTrigger>
      </>
  );
}