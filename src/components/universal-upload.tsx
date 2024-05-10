"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/api/uploadthing/core";

import { useToast } from "@/components/ui/use-toast";

type UniversalUploadProps = {
	onChange: (url?: string, name?: string) => void;
	endpoint: keyof typeof ourFileRouter;
};

export const UniversalUpload = ({ onChange, endpoint }: UniversalUploadProps) => {
	const { toast } = useToast();

	return (
		<UploadDropzone
			endpoint={endpoint}
			onClientUploadComplete={(res: any) => {
				onChange(res?.[0].url, res?.[0].name);
			}}
			onUploadError={(error: Error) => {
				toast({
					title: "Something went wrong",
					description: `${error?.message}`,
					duration: 5000,
					className: "error-toast",
				});
			}}
		/>
	);
};
