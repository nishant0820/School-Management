import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Users } from "lucide-react"
import SingleStudentForm from "@/components/dashboard/forms/students/student-form"
import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form"
import InfoBanner from "@/components/info-banner"

export default function AdmissionsTabs() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger
            value="single"
            className="flex items-center justify-center space-x-2 py-3 data-[state=active]:bg-black data-[state=active]:text-white transition-all duration-300 ease-in-out"
          >
            <UserPlus className="h-5 w-5" />
            <span className="font-semibold">Single Admission</span>
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="flex items-center justify-center space-x-2 py-3 data-[state=active]:bg-black data-[state=active]:text-white transition-all duration-300 ease-in-out"
          >
            <Users className="h-5 w-5" />
            <span className="font-semibold">Bulk Admission</span>
          </TabsTrigger>
        </TabsList>
          <Card className="border-t-4 border-black shadow">
            <CardContent className="p-6">
                <TabsContent value="single" className="mt-0">
                  <InfoBanner message="Please make sure you have already created the Parent, Class and Stream for this student" type="warning" />
                  <SingleStudentForm />
                </TabsContent>
              <TabsContent value="bulk" className="mt-0">
                <BulkStudentForm />
              </TabsContent>
            </CardContent>
          </Card>
      </Tabs>
    </div>
  )
}
