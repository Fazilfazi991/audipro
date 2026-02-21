/* Basic Interactivity for FinePro */

document.addEventListener('DOMContentLoaded', () => {

    // Sticky Navbar shadow effect on scroll
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Placeholder for future implementation if needed)
    console.log('FinePro script loaded.');

    // Product Filtering Logic
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const subcategory = urlParams.get('subcategory');

    if (category) {
        const productCards = document.querySelectorAll('.shop-product-card');
        let visibleCount = 0;

        productCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardSubcategory = card.getAttribute('data-subcategory');

            let show = false;
            if (cardCategory === category) {
                if (subcategory) {
                    if (cardSubcategory === subcategory) {
                        show = true;
                    }
                } else {
                    show = true;
                }
            }

            if (show) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update results text
        const resultsText = document.querySelector('.text-center');
        if (resultsText) {
            let label = category.charAt(0).toUpperCase() + category.slice(1);
            if (subcategory) {
                label = subcategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }
            resultsText.textContent = `Showing ${visibleCount} result${visibleCount !== 1 ? 's' : ''} for "${label}"`;
        }
    }
    // Product Data (Extracted from Screenshots)
    const productsData = {
        'yamaha-dbr10': {
            title: 'Yamaha DBR10',
            category: 'Sound',
            image: 'assets/yamaha-dbr10.PNG',
            description: 'The Yamaha DBR10 is a compact, 700W (peak) 10-inch 2-way active powered loudspeaker designed for portable PA, floor monitoring, and installation. It features FIR-X tuning for high-resolution sound, a 129dB maximum SPL, and a 2-channel mixer with XLR, TRS, and RCA inputs. It is well-regarded for its lightweight (23.2 lbs) build, versatility, and durability.',
            features: [
                'Audio Quality: Clear, balanced sound, suitable for vocals and acoustic music.',
                'Power & Output: 700W (peak) Class-D amplifier (325W RMS), max SPL 129dB.',
                'DSP Features: D-Contour for FOH/Monitor modes.',
                'Input/Output: 2-channel mixer (Ch1: XLR/TRS, Ch2: XLR/TRS + RCA).',
                'Versatility: 50° wedge angle for floor monitoring, 3x M8 rigging points.',
                'Portable & Durable: Lightweight ABS plastic cabinet.',
                '7-year warranty.'
            ]
        },
        'yamaha-mg12xu': {
            title: 'Yamaha MG12XU',
            category: 'Sound',
            image: 'assets/yamaha-mg12xu.PNG',
            description: '12-Channel Mixing Console: Max. 6 Mic / 12 Line Inputs (4 mono + 4 stereo) / 2 GROUP Buses + 1 Stereo Bus / 2 AUX (incl. FX).',
            features: [
                'Max. 6 Mic / 12 Line Inputs (4 mono + 4 stereo)',
                '2 GROUP Buses + 1 Stereo Bus',
                '2 AUX (incl. FX)',
                '“D-PRE” mic preamps with an inverted Darlington circuit',
                '1-Knob compressors',
                'High-grade effects: SPX with 24 programs',
                '24-bit / 192kHz 2in / 2out USB Audio functions',
                'Works with the iPad (2 or later)',
                'Includes Cubase AI DAW software download version',
                'PAD switch on mono inputs',
                '+48V phantom power',
                'XLR balanced outputs',
                'Internal universal power supply',
                'Metal chassis'
            ]
        },
        'shure-blx24uk': {
            title: 'Shure BLX24UK/PG58X-K14',
            category: 'Sound',
            image: 'assets/shure-blx24uk.PNG',
            description: 'The Shure BLX24/PG58 Wireless Vocal System combines professional-quality sound with simple setup and up to 14 hours battery life for legendary audio performance right out of the box. The system includes BLX4 tabletop single-channel receiver, PG58 handheld transmitter, microphone clip, power supply, 2 AA batteries, and user guide.',
            features: [
                'SUPERIOR AUDIO - Perform with Confidence',
                'Get the show going with no wires attached. Professional Shure sound for every band and any vocal need.',
                'RELIABLE SIGNAL - Extend your range (up to 300 feet/100m).',
                'EASY SETUP – Own the stage. One-touch scan and selection.',
                'BATTERY LIFE – 14 hours of power from 2 AA batteries.',
                'SYSTEMS EXPANSIONS – Run up to 12 channels per frequency band.',
                'VERSATILITY INCLUDED – Compatible with impressive variety of Shure microphones.'
            ]
        },
        'dbx-231s': {
            title: 'DBX 231s',
            category: 'Sound',
            image: 'assets/dbx-231s.PNG',
            description: 'When the pros need an EQ, they turn to dbx. With a proven track record that spans four decades, dbx® EQs are the industry standard for touring, studios, and audio installations. The dbx 231s includes two 31-band channels of 1/3-octave equalization, ±12 dB input gain, switchable ±6 dB or ±12 dB boost/cut range, 20mm nonconductive sliders, an intuitive user interface, and output level metering.',
            features: [
                'Dual 31-band, 1/3-octave Constant Q frequency bands',
                'Switchable boost/cut ranges of ±6 or ±12 dB',
                'Front panel bypass switch',
                '±12 dB input gain range',
                '4-segment LED ladders for monitoring output levels',
                'XLR and TRS Inputs and Outputs',
                'Frequency Response of <10Hz to >50kHz',
                'Dynamic range of greater than 108dB'
            ]
        },
        'rcf-art-910-a': {
            title: 'RCF - ART 910-A',
            category: 'Sound / Speakers',
            image: 'assets/rcf-art-910-a.png',
            description: 'ART 910-A is masterfully engineered to deliver stellar audio performance and versatility for intensive audio applications. The combination of a 1.75" compression driver, 10" woofer, two-channel 2100W amplifier, and the constant directivity True Resistive Waveguide produces coherent 100° x 60° coverage for the listening area with up to 130 dB SPL, distortion-free sound. Merging RCF proprietary FiRPHASE and Bass Motion Control (BMC) DSP processing, perfectly tuned for each model, audiences will experience absolute clarity and deep, powerful bass response. The sleek cabinet uses a special polypropylene composite material with an M-brace internal reinforcement, making it easy to carry and secure to install on a pole, flown-, wall-, or truss-mounted using the multiple rigging points available.',
            features: [
                'Up to 130 dB Sound Pressure Level',
                '2100W Class-D Bi-Amplification',
                '50-20000 Hz linear frequency response',
                '1.75" Compression Driver',
                '10" Woofer',
                'FiRPHASE zero degrees phase technology',
                'Bass Motion Control woofer excursion management'
            ]
        },
        'rcf-nx-910-a': {
            title: 'RCF - NX 910-A',
            category: 'Sound / Speakers',
            image: 'assets/rcf-nx-910-a.png',
            description: 'NX 910-A is masterfully engineered from the ground up to deliver stellar audio performance for solo musicians, bands, and DJs. The combination of 1.75" compression driver, 10" woofer, two-channel 2100W amplifier, and a constant directivity waveguide produces coherent 100° x 60° coverage for the listening area with up to 130 dB SPL of distortion-free sound. Used as a stand-alone speaker for a FOH system, satellite (with subwoofer), stage monitor, or flown speaker, the NX 910-A blends high-performance and reliability in a compact package. Blending RCF proprietary FiRPHASE and Bass Motion Control DSP processing, NX 9 Series speakers are perfectly tuned for each model, delivering absolute clarity and deep, powerful bass response. The tour-ready, rugged all-wood cabinet is easy to carry and secure to install on a pole-, flown-, wall-, or truss-mounted using the dedicated rigging points available.',
            features: [
                'Up to 130 dB Sound Pressure Level',
                '2100W Class-D Bi-Amplification',
                '50-20000 Hz linear frequency response',
                '1.75" Compression Driver',
                '10" Woofer',
                'FiRPHASE zero degrees phase technology',
                'Bass Motion Control woofer excursion management'
            ]
        }
    };

    // Render Product Details if on details page
    const detailsContainer = document.getElementById('product-details-container');
    if (detailsContainer) {
        const productId = urlParams.get('id');
        const product = productsData[productId];

        if (product) {
            document.title = `${product.title} | FinePro`;

            // Prepare WhatsApp Message
            const waMessage = encodeURIComponent(`Hi, I am interested in the ${product.title}. Can you please provide more details and pricing?`);

            // Generate HTML
            const html = `
                <div class="product-detail-img">
                    <img src="${product.image}" alt="${product.title}">
                </div>
                <div class="product-detail-info">
                    <span class="product-cat-tag">${product.category}</span>
                    <h1>${product.title}</h1>
                    <div class="product-description">
                        <p>${product.description}</p>
                    </div>
                    
                    <div class="product-features">
                        <h3>Key Features</h3>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="product-actions">
                        <a href="contact.html?product=${encodeURIComponent(product.title)}" class="btn btn-primary">Enquire Now</a>
                        <a href="https://wa.me/971527388589?text=${waMessage}" target="_blank" class="btn btn-whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp Now</a>
                    </div>
                </div>
            `;

            detailsContainer.innerHTML = html;
        } else {
            detailsContainer.innerHTML = '<div class="text-center" style="grid-column: 1 / -1;"><h2>Product not found</h2><p>Please return to the <a href="shop.html">shop page</a>.</p></div>';
        }
    }
});
