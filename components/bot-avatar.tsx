import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface BotAvatarProps {
    src: string
}

const BotAvatar:React.FC<BotAvatarProps> = ({
    src
}) => {
    return ( 
        <div>
            <Avatar className=" h-12 w-12">
                <AvatarImage className=" object-cover" src={src}/>
            </Avatar>
        </div>
     );
}
 
export default BotAvatar;