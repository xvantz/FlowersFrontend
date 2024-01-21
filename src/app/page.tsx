
import Person from "@/widgets/Person";
import Posts from "@/widgets/posts/recentPosts";
import Works from "@/widgets/works/lastWorks";

export default function Home() {
  return (  
    <div>
      <Person/>
      <Posts/>
      <Works/>
    </div>
  )
}
