import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/lib/data";
import { CourseExplorer } from "./CourseExplorer";

export const metadata = {
  title: "Khoá học | TJLearn",
};

export default function CoursesPage() {
  return (
    <section className="py-14">
      <Container>
        <SectionHeading
          eyebrow="Thư viện khoá học"
          title="Mọi kỹ năng số bạn cần, trong một nơi"
          description="Từ lập trình, thiết kế, dữ liệu đến marketing — chọn khoá miễn phí để bắt đầu hoặc trả phí để đi sâu."
        />
        <div className="mt-10">
          <CourseExplorer courses={courses} />
        </div>
      </Container>
    </section>
  );
}
