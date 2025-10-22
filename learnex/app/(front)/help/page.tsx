import HelpPage from '@/components/frontend/help-page'
import SectionHeader from '@/components/frontend/section-header'
import React from 'react'

export default function page() {
  return (
    <div className='py-12'>
        <SectionHeader
                          title=""
                          heading="Help Center & Resources"
                          description="Find answers, learn best practices and discover how to get the most of your LearneX system. Browse through out FAQs or explore our helpful articles to enhance your experience."
                        />
      <HelpPage />
    </div>
  )
}
