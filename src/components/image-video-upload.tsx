"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/api/uploadthing/core";

import { useToast } from "@/components/ui/use-toast";

type ImageVideoUploadProps = {
	onChange: (url?: string) => void;
	endpoint: keyof typeof ourFileRouter;
};

export const ImageVideoUpload = ({ onChange, endpoint }: ImageVideoUploadProps) => {
	const { toast } = useToast();

	return (
		<UploadDropzone
			endpoint={endpoint}
			onClientUploadComplete={(res: any) => {
				onChange(res?.[0].url);
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
