import { Topbar } from "@/components/dashboard/Topbar";
import { classes, students } from "@/lib/data";
import { StudentsManager } from "./StudentsManager";

export default function DashboardStudentsPage() {
  return (
    <div className="flex-1">
      <Topbar title="Học sinh" subtitle={`Quản lý ${students.length} học viên trong tất cả lớp học`} />
      <div className="p-5 sm:p-8">
        <StudentsManager students={students} classes={classes} />
      </div>
    </div>
  );
}
