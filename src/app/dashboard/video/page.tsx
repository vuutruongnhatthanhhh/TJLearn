import { Topbar } from "@/components/dashboard/Topbar";
import { courses, videos } from "@/lib/data";
import { VideosManager } from "./VideosManager";

export default function DashboardVideosPage() {
  return (
    <div className="flex-1">
      <Topbar title="Video" subtitle="Quản lý video bài giảng cho các khoá học của bạn" />
      <div className="p-5 sm:p-8">
        <VideosManager initialVideos={videos} courses={courses} />
      </div>
    </div>
  );
}
