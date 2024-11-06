"use client"

import * as React from "react"
import { X, Grid, Image as ImageIcon, Phone, MapPin, Share2, Instagram } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Toggle } from "@/components/ui/toggle"

const waffles = [
  { name: "Masala Dosa", price: "$5.99", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB6LUswYhEpzZPjXeGJNtdUKPYeCuGz0JoBQ&s"},
  { name: "Crispy Dosa", price: "$6.99", img: "https://www.cubesnjuliennes.com/wp-content/uploads/2023/10/Crispy-Plain-Dosa-Recipe-1.jpg" },
  { name: "Jimmy Roll Dosa", price: "$7.49", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8sV2U3wyfo1Gjy0Jncd9CsTYorvWNWTxTHA&s" },
  { name: "Maisoor Masala Dosa", price: "$7.99", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Dosai_Chutney_Hotel_Saravana_Bhavan.jpg/1200px-Dosai_Chutney_Hotel_Saravana_Bhavan.jpg" },
  { name: "Garlic Dosa", price: "$7.49", img: "https://assets.gqindia.com/photos/64f1da6829ae1dbbe3d61789/16:9/w_2560%2Cc_limit/Dosa1.jpg" },
  { name: "Barley Idli and Dosa", price: "$8.49", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRo0JyHW5oK47aPT_EdAVKyo4HRD5DCJzcYLNSmavilNvMLhx7R1d96VKZdox8g7Cq4hyphenhyphenBei3i_qWftXwQ9_yBUzbGailnjWWvNVkDd2d_wZUg71Ya_GTJ9GnRpe9TadphPH0bOTM-Ci0E/s1600/Barley+Idli+Dosa.JPG" },
]

const topSellingWaffles = waffles.slice(0, 3)

const fullMenuImageUrl = "https://images.jdmagicbox.com/comp/rajkot/u6/0281px281.x281.200628001217.v9u6/catalogue/devi-madras-cafe-saurashtra-kala-kendra-rajkot-coffee-shops-pd65eptxhd.jpg" // Replace with your actual image URL
const logoUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8vNCSgLtVwpyp8OM-xgopEE3zY1TvW6UTw&s" // Replace with your actual logo URL

export function WallsOfWafflesMenuComponent() {
  const [showImageMenu, setShowImageMenu] = React.useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true)

  React.useEffect(() => {
    // Ensure drawer is open by default
    setIsDrawerOpen(true)
  }, [])

  return (
    (<div className="min-h-screen bg-background pb-16">
      <div className="p-4 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Devi Madras Cafe</h1>
          <div className="flex items-center space-x-2">
            <Toggle
              aria-label="Toggle menu view"
              pressed={showImageMenu}
              onPressedChange={setShowImageMenu}>
              {showImageMenu ? <Grid className="h-4 w-4" /> : <ImageIcon className="h-4 w-4" />}
            </Toggle>
          </div>
        </div>
        
        {showImageMenu ? (
          <div className="w-full max-w-3xl mx-auto">
            <Image
              src={fullMenuImageUrl}
              alt="Full Waffle House Menu"
              width={1200}
              height={1600}
              layout="responsive"
              className="rounded-lg shadow-lg" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {waffles.map((waffle, img, index) => (
              <Drawer key={index}>
                <DrawerTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-auto py-4 flex flex-col items-center justify-center">
                    <Image
                      src={waffle.img}
                      alt={waffle.name}
                      width={100}
                      height={100}
                      className="mb-2 rounded-md" />
                    <span className="font-semibold">{waffle.name}</span>
                    <span className="text-sm text-muted-foreground">{waffle.price}</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <ScrollArea className="h-[80vh] md:h-auto">
                    <div className="mx-auto w-full max-w-sm md:max-w-2xl p-4 md:p-6">
                      <DrawerHeader className="relative">
                        <DrawerTitle className="text-2xl">{waffle.name}</DrawerTitle>
                        <DrawerDescription>Delicious homemade waffle</DrawerDescription>
                        <DrawerClose className="absolute right-0 top-0">
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                          </Button>
                        </DrawerClose>
                      </DrawerHeader>
                      <div className="mt-4 space-y-4">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=${waffle.name}`}
                          alt={waffle.name}
                          width={400}
                          height={300}
                          className="w-full rounded-lg" />
                        <p className="text-muted-foreground">
                          Our {waffle.name.toLowerCase()} is made with the finest ingredients, cooked to perfection, and served hot and crispy. 
                          Enjoy it with your choice of toppings and syrup for a delightful breakfast experience.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Image
                              key={i}
                              src={`/placeholder.svg?height=100&width=100&text=Image ${i}`}
                              alt={`Waffle image ${i}`}
                              width={100}
                              height={100}
                              className="w-full rounded-md" />
                          ))}
                        </div>
                      </div>
                      <DrawerFooter className="mt-4">
                        <Button className="w-full">Add to Order</Button>
                        <Button variant="outline" className="w-full">View More</Button>
                      </DrawerFooter>
                    </div>
                  </ScrollArea>
                </DrawerContent>
              </Drawer>
            ))}
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger asChild>
            <Button className="w-full">View Top-Selling Waffles</Button>
          </DrawerTrigger>
          <DrawerContent>
            <ScrollArea className="h-[80vh] md:h-auto">
              <div className="mx-auto w-full max-w-sm md:max-w-2xl p-4 md:p-6">
                <DrawerHeader className="relative">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={logoUrl}
                      alt="Walls of Waffles Logo"
                      width={40}
                      height={40}
                      className="rounded-full" />
                    <DrawerTitle className="text-2xl">The Walls of Waffles</DrawerTitle>
                  </div>
                  <DrawerDescription>Our customers favorites</DrawerDescription>
                  <DrawerClose className="absolute right-0 top-0">
                    <Button variant="ghost" size="icon">
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="mt-4 space-y-4">
                  {topSellingWaffles.map((waffle, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Image
                        src={`https://www.pillsbury.in/wp-content/uploads/2021/09/Waffle.jpg`}
                        alt={waffle.name}
                        width={80}
                        height={80}
                        className="rounded-md" />
                      <div>
                        <h3 className="font-semibold">{waffle.name}</h3>
                        <p className="text-sm text-muted-foreground">{waffle.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <DrawerFooter className="mt-6 flex flex-col space-y-4">
                  <div className="flex justify-between w-full">
                    <Button variant="outline" size="icon" aria-label="Call">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Get Directions">
                      <MapPin className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Share">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" aria-label="Instagram">
                      <Instagram className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full">View Full Menu</Button>
                </DrawerFooter>
              </div>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </div>)
  );
}