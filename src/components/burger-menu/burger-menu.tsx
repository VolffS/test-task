import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import './hamburger.scss'
export const BurgerMenu = () => {
    return (
        <Sheet>
            <SheetTrigger className="hamburger">
                <div className="btn__hamb">

                </div>
            </SheetTrigger>
            <SheetContent side={"left"} className=" w-[400px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}