import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function useMaintainScrollPosition() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollPosition = window.scrollY;

    const handleRouteChange = () => {
      // scroll to the saved scroll position
      window.scrollTo(0, scrollPosition);
    };

    window.addEventListener("popstate", handleRouteChange);

    // cleanup process
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [pathname, searchParams]);
}

export default useMaintainScrollPosition;
