"use client";
import { Next13NProgress } from 'nextjs13-progress';
import { NEXT_PUBLIC_TOP_NAVIGATION_LOADER_COLOR } from '@/utils/constants';

const TopNavigationLoader = () => {
    return (
        <Next13NProgress
            color={NEXT_PUBLIC_TOP_NAVIGATION_LOADER_COLOR}
            height={5}
            options={{ easing: "ease", speed: 200 }}
        />
    )
}
export default TopNavigationLoader;