import { useRef, useState } from "react";
import { Pressable } from "react-native";
import LottieView from "lottie-react-native";

// ICON
import { HeartIcon } from "@/assets/animated-icons";

const Heart = () => {
  const heartRef = useRef<LottieView | null>(null);
  const [liked, setLiked] = useState<boolean>(false);
  
  const handleLike = () => {
    console.log('first')
    if (liked) {
      heartRef.current?.reset();
    } else {
      heartRef.current?.play(0, 40);
    }

    setLiked(!liked);
  };
  
  return (
    <Pressable style={{ height: 40, aspectRatio: 1, zIndex: 1000 }} onPress={handleLike}>
      <LottieView ref={heartRef} style={{ flex: 1 }} source={HeartIcon} loop={false} />
    </Pressable>
  );
};

export default Heart;
