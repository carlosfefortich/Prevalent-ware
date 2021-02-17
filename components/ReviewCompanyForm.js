function ReviewCompanyForm({labelContent, defaultInputContent}) {
    return (
        <div>
            <label className="block text-sm text-gray-500">{labelContent}</label>
            <input type="text" defaultValue={defaultInputContent} className="border-b-1 w-72 lg:w-80 font-bold"/>
        </div>
    )
}

export default ReviewCompanyForm
