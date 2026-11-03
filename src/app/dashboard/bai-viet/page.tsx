import { Topbar } from "@/components/dashboard/Topbar";
import { posts } from "@/lib/data";
import { PostsManager } from "./PostsManager";

export default function DashboardPostsPage() {
  return (
    <div className="flex-1">
      <Topbar title="Bài viết" subtitle="Đăng bài chia sẻ kiến thức và thông báo tới học viên" />
      <div className="p-5 sm:p-8">
        <PostsManager initialPosts={posts} />
      </div>
    </div>
  );
}
