import React, { Component } from 'react';
import Navbar from "./Navbar";
import Cart from "./Cart";
import Home from "./Home";
import Details from './Details';
import Bill from './Bill';

class App extends Component {

  state = {
    page: "",
    products: [
      {
        id: 1,
        image: "https://rukminim1.flixcart.com/image/416/416/l3uhvgw0/cycle/n/z/c/torro-26t-26-16-montra-72-21-gear-original-imagevzncygdd8ah.jpeg?q=70",
        name: "Montra Torro 26 T Folding Bikes/Folding Cycle  (21 Gear, Black)",
        price: 12941,
        rating: 4.6,
        category: "cycle",
        description: "Age Group: 8 - 15 YearsIdeal For: Boys/MenGear: 21 Gear| Gear Type: Easy Fire Shifters/Thumb Shifters Front Brake: Disc Brake | Rear Brake: Disc Brake Frame Material: Steel Cycle/Mild steel Cycle Suspension: Only Front Suspension Tire Size: 26 inches | Frame Size:16 inch"
      },
      {
        id: 2,
        image: "https://rukminim1.flixcart.com/image/416/416/l0mr7gw0/cycle/k/e/l/backbeat-27-5-16-5-montra-21-gear-74-original-imagcdmtbhy6qqae.jpeg?q=70",
        name: "Montra BACKBEAT 29 T Mountain Cycle  (21 Gear, Yellow, Black, Yellow)",
        price: 23749,
        rating: 3.5,
        category: "cycle",
        description: "Age Group: 15+ Years Ideal For: Men Gear: 21 Gear| Gear Type: Easy Fire Shifters/Thumb Shifters Front Brake: Disc Brake | Rear Brake: Disc Brake Frame Material: Aluminium Cycle/Alloy Cycle Suspension: Only Front Suspension Tire Size: 29 inches | Frame Size:16.5 inch"
      },
      {
        id: 3,
        image: "https://rukminim1.flixcart.com/image/416/416/l0mr7gw0/cycle/v/8/h/downtown-27-5-17-montra-21-gear-74-original-imagcdmstwfgy8k8.jpeg?q=70",
        name: "Montra DOWNTOWN 27.5 T Hybrid Cycle/City Bike  (21 Gear, Yellow, Black, Yellow)",
        price: 20899,
        rating: 4.6,
        category: "cycle",
        description: "Age Group: 15+ Years Ideal For: Men Gear: 21 Gear| Gear Type: Easy Fire Shifters/Thumb Shifters Front Brake: Disc Brake | Rear Brake: Disc Brake Frame Material: Aluminium Cycle/Alloy Cycle Suspension: Rigid Tire Size: 27.5 inches | Frame Size:17 inch"
      },
      {
        id: 4,
        image: "https://rukminim1.flixcart.com/image/416/416/korijrk0/printer/c/s/f/deskjet-2331-hp-original-imag356w4gyxzjza.jpeg?q=70",
        name: "HP DeskJet 2331 Multi-function Color Printer  (White, Purple, Ink Cartridge)",
        price: 3999,
        rating: 3.7,
        category: "printer",
        description: "Bring home the HP DeskJet 2331 Multi-function Color Printer to print your important documents, scan your child’s artworks, and make copies of various invitations at a low cost. This all-in-one printer features a User-friendly Interface for easy operations, and you can set it up quickly by following simple steps."
      },
      {
        id: 5,
        image: "https://rukminim1.flixcart.com/image/416/416/kd94uq80/printer/g/t/n/hp-deskjet-2723-original-imafu6gdzrhcyh5h.jpeg?q=70",
        name: "HP DeskJet 2723 Multi-function WiFi Color Printer with Voice Activated Printing Google Assistant and Alexa  (White, Blue, Ink Cartridge)",
        price: 5999,
        rating: 3.7,
        category: "printer",
        description: "This HP printer is great for printing, scanning and copying your documents. With the voice command feature, you can use Alexa and Google Home to print your documents out. The dual-band Wi-Fi with self-reset facilitates the ideal range and reliable connections. Thanks to the HP Smart Tasks, you can easily mail and save documents with just the touch of a button."
      },
      {
        id: 6,
        image: "https://rukminim1.flixcart.com/image/416/416/kd94uq80/printer/z/c/z/hp-deskjet-2332-original-imafu6gdhzruynxj.jpeg?q=70",
        name: "HP DeskJet 2332 Multi-function Color Printer  (White, Grey, Ink Cartridge)",
        price: 4115,
        rating: 3.7,
        category: "printer",
        description: "Printing Method Inkjet Type Multi-function Model Name DeskJet 2332 Printing Output Color Functions Print, Copy, Scan Brand HP Refill Type Ink Cartridge Ideal Usage Home & Small Office Voice Assistant Compatibility NA"
      },
      {
        id: 7,
        image: "https://rukminim1.flixcart.com/image/416/416/l4fxh8w0/computer/t/x/a/-original-imagfc54uwzmywgr.jpeg?q=70",
        name: "HP Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) 15s- fq5010TU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 kg, With MS Office)",
        price: 57889,
        rating: 4.3,
        category: "laptop",
        description: "Stylish & Portable Thin and Light Laptop 15.6 Inch Full HD, micro-edge, anti-glare, UWVA, Brightness: 250 nits, 141 ppi, Color Gamut: 45%NTSC Light Laptop without Optical Disk Drive"
      },
      {
        id: 8,
        image: "https://rukminim1.flixcart.com/image/416/416/kzogn0w0/computer/o/3/6/15-eg1000tx-thin-and-light-laptop-hp-original-imagbn4b6ht9xznp.jpeg?q=70",
        name: "HP Pavilion Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) 15-EG2009TU Thin and Light Laptop  (15.6 inch, Natural Silver, 1.75 kg, With MS Office)",
        price: 65990,
        rating: 4,
        category: "laptop",
        description: "Stylish & Portable Thin and Light Laptop 15.6 inch Full HD, IPS, Micro-Edge, Bright View, Brightness: 250 nits, 141 ppi, Color Gamut: 45% NTSC Light Laptop without Optical Disk Drive"
      },
      {
        id: 9,
        image: "https://rukminim1.flixcart.com/image/416/416/l0tweq80/computer/x/0/l/x1402za-eb511ws-thin-and-light-laptop-asus-original-imagcjaza26yguhf.jpeg?q=70",
        name: "ASUS VivoBook 14 (2022) Core i3 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) X1402ZA-EB311WS Thin and Light Laptop  (14 inch, Quiet Blue, 1.50 kg, With MS Office)",
        price: 47990,
        rating: 4.6,
        category: "laptop",
        description: "Stylish & Portable Thin and Light Laptop 14 inch Full HD, IPS Level Panel, Anti-glare Display, 16:9 Aspect Ratio, Screen-to-Body Ratio: 82%, 250nits Brightness, 45% NTSC Color Gamut Finger Print Sensor for Faster System Access Light Laptop without Optical Disk Drive"
      },
    ],
    cart: [],
    profile: {
      name: "Sample Name",
      mobile: "9876543210",
      address: "123 Sample Street",
    },
  }

  handleCart = () => {
    this.setState({ page: <Cart products={this.state.cart} onMinus={this.handleMinus} onPlus={this.handlePlus} onPay={this.handlePay} onCartCardRemove={this.handleCartCardRemove} /> })
  }

  handleHome = () => {
    this.setState({
      page: <Home
        products={this.state.products}
        onDetails={this.handleDetails} />
    })
  }

  handleDetails = (product) => {
    this.setState({ page: <Details product={product} onAddToCart={() => { this.handleAddToCart(product) }} onBuyNow={() => { this.handleBuyNow(product) }} /> })
  }

  handleAddToCart = (product) => {
    product.qty = 1;
    this.setState({ cart: this.state.cart.concat(product) })
  }

  handlePlus = (product) => {
    this.state.cart.find(item => item.id === product.id).qty++;
    this.setState({ cart: this.state.cart })
    this.setState({
      page: <Cart
        products={this.state.cart}
        onMinus={this.handleMinus}
        onPlus={this.handlePlus}
        onPay={this.handlePay}
        onCartCardRemove={this.handleCartCardRemove} />
    })
  }

  handleMinus = (product) => {
    if (this.state.cart.find(item => item.id === product.id).qty === 1) {
      this.state.cart.splice(this.state.cart.indexOf(product), 1);
    }
    else {
      this.state.cart.find(item => item.id === product.id).qty--;
    }
    this.setState({ cart: this.state.cart })
    this.setState({
      page: <Cart
        products={this.state.cart}
        onMinus={this.handleMinus}
        onPlus={this.handlePlus}
        onPay={this.handlePay}
        onCartCardRemove={this.handleCartCardRemove} />
    })
  }

  handleCartCardRemove = (product) => {
    this.state.cart.splice(this.state.cart.indexOf(product), 1);
    this.setState({ cart: this.state.cart })
    this.setState({
      page: <Cart products={this.state.cart}
        onMinus={this.handleMinus}
        onPlus={this.handlePlus}
        onPay={this.handlePay}
        onCartCardRemove={this.handleCartCardRemove} />
    })
  }

  handleChangeName = (event) => {
    this.state.profile.name = event.target.value
    this.setState({ profile: this.state.profile })
  }

  handleChangeMobile = (event) => {
    this.state.profile.mobile = event.target.value
    this.setState({ profile: this.state.profile })
  }

  handleChangeAddress = (event) => {
    this.state.profile.address = event.target.value
    this.setState({ profile: this.state.profile })
  }

  handlePay = () => {
    this.setState({
      page: <Bill profile={this.state.profile}
        products={this.state.cart} />
    })
  }

  handleBuyNow = (product) => {
    this.handleAddToCart(product);
    this.handlePay();
  }

  render() {
    return (
      <div>
        <Navbar
          profile={this.state.profile}
          onCart={this.handleCart}
          onHome={this.handleHome}
          onChangeName={this.handleChangeName}
          onChangeMobile={this.handleChangeMobile}
          onChangeAddress={this.handleChangeAddress}
        />
        {this.state.page}
      </div>
    )
  }
}

export default App;