import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleAlert, MapPin } from "lucide-react";
import Image from "next/image";

const items = [
  {imgSrc: '/main-image.png', id: 1,},
  {imgSrc: '/main-image.png', id: 2,},
  {imgSrc: '/main-image.png', id: 3,},
]

const digits = [
  {number: 14, label: "Work Completed"},
  {number: 10, label: "Design Sold"},
]

export default function Home() {
  return (
    <main className="width-container xl:mt-5">
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-9 w-full h-[80vh] border rounded-xl bg-neutral-200  p-2 dark:bg-[#141414]">
          <div className="grid grid-cols-12 gap-4 h-full p-2">
            <div className="col-span-2 h-full">
              <div className="flex items-center justify-center flex-col gap-4 p-1">
                {items.map((item, index) => (
                  <div 
                  key={index} className="w-full h-36 relative">
                    <Image 
                    src={item.imgSrc} 
                    alt="Images"
                    fill 
                    className="absolute rounded-md object-center" />
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-10 h-full w-full relative p-1">
              <Image 
              fill 
              className="absolute object-center rounded-md" 
              alt="Main Image" 
              src="/main-image.png" 
               />
            </div>
          </div>
          
        </div>
        <div className="col-span-3 w-full space-y-4">
          <div className="h-auto w-full bg-neutral-200  p-2 dark:bg-[#141414] border py-2 rounded-md">
                <div className="flex items-center justify-center flex-col p-2 gap-2">
                  <p className="font-semibold">$3500.00</p>
                  <div className="border-neutral-400 border-1 mt-2  w-5/12 mx-auto p-1 flex items-center justify-center gap-2">
                    <span className="text-xs">Exclusive Right</span>
                    <CircleAlert className="size-3 text-purple-700" />
                  </div>
                  <Button className='bg-purple-800 rounded-full dark:text-primary/50 mt-5 hover:bg-purple-600 xl:px-10'>
                      Buy Collections
                  </Button>
                </div>
          </div>

          <div className="w-full">
                <div className="flex items-center justify-center gap-4 h-auto bg-neutral-200 p-2 dark:bg-[#141414] border py-2 rounded-md">
                  <div className="py-2 w-8/12 mx-auto space-y-4">
                    <div className="w-full space-y-4">
                      <p className="text-center">About the Artist</p>
                      <Separator className="bg-neutral-400 dark:bg-neutral-800" />
                    </div>

                    <div className="py-4 w-full flex flex-col items-center gap-2 justify-center">
                      <div className="h-24 w-24 relative">
                        <Image 
                        fill 
                        className="absolute object-cover rounded-full" 
                        alt="Image Profile"
                        src="/image-profile.png" />
                      </div>
                      <span className="text-sm">
                        @Ocean
                      </span>
                      <p className="text-sm">Fashion Artist</p>
                      <p className="flex items-center justify-center gap-2">
                        <MapPin className="size-4" />
                        <span className="text-sm">Lagos, Nigeria</span>
                      </p>
                      <p className="flex items-center justify-center gap-2">
                        <span className="text-sm">Ratings: </span>
                        <span className="text-sm">5.0
                          <span className="text-sm underline underline-offset-1 ml-2">[5 verified reviews]</span>
                        </span>
                      </p> 
                    </div>

                    <div className="flex items-center justify-center flex-col gap-6 pb-10">
                      {digits.map((digit, index) => (
                        <div key={index} className="flex items-center justify-center flex-col gap-2 text-sm">
                           <p className="font-semibold">{digit.number}</p>
                           <p>{digit.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </main>
  );
}
