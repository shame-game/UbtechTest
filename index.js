document.querySelectorAll('div[data-icon-v="v5"]').forEach((t) => {
	t.innerHTML = `<i class="fa-solid fa-chevron-right" style="color: ${t.getAttribute('color')};font-size: ${t.getAttribute('font')}px;" aria-hidden="true"></i>`
	t.style.removeProperty('before');
})
document.querySelectorAll('div[data-icon-v="v4"]').forEach((t) => {
	t.style.removeProperty('before');
	t.innerHTML = `<i class="fa-solid fa-chevron-left" style="color: ${t.getAttribute('color')};font-size: ${t.getAttribute('font')}px;" aria-hidden="true"></i>`
})

document.querySelector('#header_m').innerHTML = `
<header class="et-l et-l--header">
					<div class="et_builder_inner_content et_pb_gutters3">
						<div
							class="et_pb_section et_pb_section_0_tb_header et_pb_with_background et_section_regular et_pb_section--with-menu">
							<div
								class="et_pb_with_border et_pb_row et_pb_row_0_tb_header et_pb_equal_columns et_pb_gutters1 et_pb_row--with-menu">
								<div
									class="et_pb_column et_pb_column_1_3 et_pb_column_0_tb_header  et_pb_css_mix_blend_mode_passthrough">
									<div class="et_pb_module et_pb_image et_pb_image_0_tb_header">




										<a href="https://ubtechvietnam.edu.vn/index.html"><span class="et_pb_image_wrap "><img decoding="async"
													src="https://www.ubtechvietnam.com/wp-content/uploads/2021/04/LogoUB2.svg"
													alt="" title="LogoUB2" class="wp-image-8996" /></span></a>
									</div>
								</div>
								<div
									class="et_pb_column et_pb_column_1_3 et_pb_column_1_tb_header  et_pb_css_mix_blend_mode_passthrough et_pb_column--with-menu">




									<div
										class="et_pb_module et_pb_menu et_pb_menu_0_tb_header et_pb_bg_layout_light  et_pb_text_align_left et_dropdown_animation_fade et_pb_menu--without-logo et_pb_menu--style-left_aligned">




										<div class="et_pb_menu_inner_container clearfix">

											<div class="et_pb_menu__wrap">
												<div class="et_pb_menu__menu">
													<nav class="et-menu-nav">
														<ul id="menu-mobile-menu" class="et-menu nav">
															<li id="menu-item-320"
																class="et_pb_menu_page_id-24 menu-item menu-item-type-post_type menu-item-object-page menu-item-320">
																<a href="https://ubtechvietnam.edu.vn/chung-toi/index.html">GIỚI THIỆU</a>
															</li>
															<li id="menu-item-26294"
																class="et_pb_menu_page_id-26241 menu-item menu-item-type-post_type menu-item-object-page menu-item-26294">
																<a href="https://ubtechvietnam.edu.vn/chuong-trinh-ai-robotic-k12/index.html">AI
																	&#038;
																	ROBOT GIÁO DỤC</a>
															</li>
															<li id="menu-item-10043"
																class="et_pb_menu_page_id-9 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-10043">
																<a href="https://ubtechvietnam.edu.vn/san-pham/index.html">GIẢI PHÁP ROBOT</a>
																<ul class="sub-menu">
																	<li id="menu-item-309"
																		class="first-level et_pb_menu_page_id-296 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-309">
																		<a href="https://ubtechvietnam.edu.vn/robot-dich-vu/index.html">Robot Dịch
																			Vụ</a>
																		<ul class="sub-menu">
																			<li id="menu-item-4346"
																				class="second-level et_pb_menu_page_id-4342 menu-item menu-item-type-post_type menu-item-object-product menu-item-4346">
																				<a href="https://ubtechvietnam.edu.vn/product/adibot"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1A1g_tlcbODZ8gHxejM_QeXA0zQs613vb"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">Adibot
																					</p>
																				</a>
																			</li>
																			<li id="menu-item-348"
																				class="second-level et_pb_menu_page_id-344 menu-item menu-item-type-post_type menu-item-object-product menu-item-348">
																				<a href="https://ubtechvietnam.edu.vn/product/cruzr/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1q0l4wIuLhHDh5HX882Wp5w69smngbr4v"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">Cruzr
																					</p>
																				</a>
																			</li>
																			<li id="menu-item-348"
																				class="second-level et_pb_menu_page_id-344 menu-item menu-item-type-post_type menu-item-object-product menu-item-348">
																				<a href="https://ubtechvietnam.edu.vn/product/cadebot-l100/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1uCBMQ1S5IkI-uMYvTrbLm3YIruXKkOnp"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">Cadebot L100
																					</p>
																				</a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-308"
																		class="first-level et_pb_menu_page_id-304 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-308">
																		<a href="https://ubtechvietnam.edu.vn/robot-cao-cap/index.html">Robot Cao
																			Cấp</a>
																		<ul class="sub-menu">
																			<li id="menu-item-350"
																				class="second-level et_pb_menu_page_id-342 menu-item menu-item-type-post_type menu-item-object-product menu-item-350">
																				<a href="https://ubtechvietnam.edu.vn/product/alpha-1e/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1ZQfOilItslY3d5U_NPNvVLIqeYnMFiVO"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">Alpha
																						1E
																					</p>
																				</a>
																			</li>
																			<li id="menu-item-349"
																				class="second-level et_pb_menu_page_id-343 menu-item menu-item-type-post_type menu-item-object-product menu-item-349">
																				<a href="https://ubtechvietnam.edu.vn/product/alpha-mini/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1lleOiPYaTiiHjz4c9B_-CLiAQ6sTLkc3"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">Alpha
																						Mini
																					</p>
																				</a>
																			</li>
																			<li id="menu-item-8671"
																				class="second-level et_pb_menu_page_id-8653 menu-item menu-item-type-post_type menu-item-object-product menu-item-8671">
																				<a href="https://ubtechvietnam.edu.vn/product/yanshee/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1WraFGOAZpaulz-zUMwTMsnlsZ2LoPgbM"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						Yanshee
																					</p>
																				</a>
																			</li>
																			<li id="menu-item-8671"
																				class="second-level et_pb_menu_page_id-8653 menu-item menu-item-type-post_type menu-item-object-product menu-item-8671">
																				<a href="https://ubtechvietnam.edu.vn/product/walkers1/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1SEj7W9nXw8Axw8MUv8-z2Wk-9PhTPtpq"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						WalkerS1
																					</p>
																				</a>
																			</li>
																			<li id="menu-item-8671"
																				class="second-level et_pb_menu_page_id-8653 menu-item menu-item-type-post_type menu-item-object-product menu-item-8671">
																				<a href="https://ubtechvietnam.edu.vn/product/walkerE/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/10iW5rVSC6C8LJSYv-nnoMycM9Nl6iLzF
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						walker E
																					</p>
																				</a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-8016"
																		class="first-level et_pb_menu_page_id-8012 menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-8016">
																		<a href="https://ubtechvietnam.edu.vn/robot-jimu/index.html">Robot Jimu</a>
																		<ul class="sub-menu">
																			<li id="menu-item-355"
																				class="second-level et_pb_menu_page_id-337 menu-item menu-item-type-post_type menu-item-object-product menu-item-355">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/astrobot-kit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1AF8F4JfZ3XDswguF12rvgwk5Z13vzIKo"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						Astrobot
																						Kit</p>
																				</a>
																			</li>
																			<li id="menu-item-353"
																				class="second-level et_pb_menu_page_id-339 menu-item menu-item-type-post_type menu-item-object-product menu-item-353">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/courtbot-kit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1GjW_zAWyPNv2S9lgQPOeanmXYGUqLASd"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						Courtbot
																						Kit</p>
																				</a>
																			</li>
																			<li id="menu-item-351"
																				class="second-level et_pb_menu_page_id-341 menu-item menu-item-type-post_type menu-item-object-product menu-item-351">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/scorebot-kit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1XoO2bT68UwMF7zmCb1BIlN8Py37sB2wv"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						Scorebot
																						Kit</p>
																				</a>
																			</li>
																			<li id="menu-item-352"
																				class="second-level et_pb_menu_page_id-340 menu-item menu-item-type-post_type menu-item-object-product menu-item-352">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/trackbot-kit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/11m7b7B1TEL0aegWofXCoJC-DlV1fpavt"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						Trackbot
																						Kit</p>
																				</a>
																			</li>
																			<li id="menu-item-354"
																				class="second-level et_pb_menu_page_id-338 menu-item menu-item-type-post_type menu-item-object-product menu-item-354">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/mythical-series-unicornbot-kit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1yfcdI9tQcZ_irSttNWKxZDBVXV-AseDG"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						Unicornbot
																						Kit</p>
																				</a>
																			</li>
																			<li id="menu-item-356"
																				class="second-level et_pb_menu_page_id-336 menu-item menu-item-type-post_type menu-item-object-product menu-item-356">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/warriorbot-kit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1HKMVrDGVanCgkVJ6b1Sxb0WkqOhbQCOZ"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">
																						Warriorbot
																						Kit</p>
																				</a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-5477"
																		class="first-level et_pb_menu_page_id-5477 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5477">
																		<a href="https://ubtechvietnam.edu.vn/">uKit Dạy Học</a>
																		<ul class="sub-menu">
																			<li id="menu-item-7034"
																				class="second-level et_pb_menu_page_id-6956 menu-item menu-item-type-post_type menu-item-object-product menu-item-7034">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-fantasy-zoo-ukit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Fantasy Zoo</p>
																				</a>
																			</li>
																			<li id="menu-item-7142"
																				class="second-level et_pb_menu_page_id-7115 menu-item menu-item-type-post_type menu-item-object-product menu-item-7142">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-smart-life-ukit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Smart
																						Life</p>
																				</a>
																			</li>
																			<li id="menu-item-7141"
																				class="second-level et_pb_menu_page_id-7116 menu-item menu-item-type-post_type menu-item-object-product menu-item-7141">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-transformer-workshop-ukit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Transformer Workshop</p>
																				</a>
																			</li>
																			<li id="menu-item-7140"
																				class="second-level et_pb_menu_page_id-7117 menu-item menu-item-type-post_type menu-item-object-product menu-item-7140">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-magic-world-ukit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Magic
																						World</p>
																				</a>
																			</li>
																			<li id="menu-item-7143"
																				class="second-level et_pb_menu_page_id-7120 menu-item menu-item-type-post_type menu-item-object-product menu-item-7143">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-super-assistant-ukit/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Super
																						Assistant</p>
																				</a>
																			</li>
																			<li id="menu-item-7144"
																				class="second-level et_pb_menu_page_id-7121 menu-item menu-item-type-post_type menu-item-object-product menu-item-7144">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-super-engineer/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Super
																						Engineer</p>
																				</a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-7919"
																		class="first-level et_pb_menu_page_id-7919 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7919">
																		<a href="https://ubtechvietnam.edu.vn/">Sách</a>
																		<ul class="sub-menu">
																			<li id="menu-item-8346"
																				class="second-level et_pb_menu_page_id-8314 menu-item menu-item-type-post_type menu-item-object-product menu-item-8346">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-fantasy-zoo-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/18QLpojyN4g-8gyLdpeO_1Mf-DkO_AQct"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Fantasy Zoo</p>
																				</a>
																			</li>
																			<li id="menu-item-8345"
																				class="second-level et_pb_menu_page_id-8315 menu-item menu-item-type-post_type menu-item-object-product menu-item-8345">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-smart-life-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1UtgvUnu7IZSx6lWkkQmfjox4ilzERZlX"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Smart
																						Life</p>
																				</a>
																			</li>
																			<li id="menu-item-8340"
																				class="second-level et_pb_menu_page_id-8327 menu-item menu-item-type-post_type menu-item-object-product menu-item-8340">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-jimu-astrobot-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1LWoTIVtKtrHsWFRp9JELqdk4Ej-JHQod"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Jimu
																						Astrobot</p>
																				</a>
																			</li>
																			<li id="menu-item-8344"
																				class="second-level et_pb_menu_page_id-8316 menu-item menu-item-type-post_type menu-item-object-product menu-item-8344">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-transformer-workshop-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1iy5Ig0wOLQA1kp4MxMnn6PqkN_7YJJeP"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Transformer Workshop</p>
																				</a>
																			</li>
																			<li id="menu-item-8343"
																				class="second-level et_pb_menu_page_id-8317 menu-item menu-item-type-post_type menu-item-object-product menu-item-8343">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-magic-world-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1zR4FubbXo2s0aiWDLjPZixnibzxuAt6N"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Magic
																						World</p>
																				</a>
																			</li>
																			<li id="menu-item-8342"
																				class="second-level et_pb_menu_page_id-8323 menu-item menu-item-type-post_type menu-item-object-product menu-item-8342">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-super-assistant-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1mnEjEL4XkPDaKYybvlhjZeFyy8g5mRCS"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Super
																						Assistant</p>
																				</a>
																			</li>
																			<li id="menu-item-8341"
																				class="second-level et_pb_menu_page_id-8324 menu-item menu-item-type-post_type menu-item-object-product menu-item-8341">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-super-engineer-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1bEid-sfUwd1U0oofpwwE6lWgXzhKHQZb"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Super
																						Engineer</p>
																				</a>
																			</li>
																			<li id="menu-item-8339"
																				class="second-level et_pb_menu_page_id-8328 menu-item menu-item-type-post_type menu-item-object-product menu-item-8339">
																				<a
																					href="https://ubtechvietnam.edu.vn/product/ai-super-designer-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1Pn5OffIM4oUHF18jVuZ-oKQ9b4lEUG9X"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">A.I
																						Super
																						Designer</p>
																				</a>
																			</li>
																			<li id="menu-item-8338"
																				class="second-level et_pb_menu_page_id-8331 menu-item menu-item-type-post_type menu-item-object-product menu-item-8338">
																				<a
																					href="product/the-application-and-exploration-of-ai-book/index.html"><img
																						decoding="async"
																						src="https://lh3.googleusercontent.com/d/1JAunAeTuvJzTqgB4v4jN8P7zj6DxpoPz"
																						alt="Alternate Text"
																						width="120px" />
																					<p style="align-self:center;">The
																						Application And Exploration Of
																						A.I
																					</p>
																				</a>
																			</li>
																		</ul>
																	</li>
																</ul>
															</li>
															<li id="menu-item-8617"
																class="et_pb_menu_page_id-8613 menu-item menu-item-type-post_type menu-item-object-page menu-item-8617">
																<a href="https://ubtechvietnam.edu.vn/a-i-center/index.html">A.I Center</a>
															</li>
															<li id="menu-item-8647"
																class="et_pb_menu_page_id-4349 menu-item menu-item-type-post_type menu-item-object-page menu-item-8647">
																<a href="https://ubtechvietnam.edu.vn/tin-tuc/index.html">Tin Tức</a>
															</li>
															<li id="menu-item-321"
																class="et_pb_menu_page_id-298 menu-item menu-item-type-post_type menu-item-object-page menu-item-321">
																<a href="https://ubtechvietnam.edu.vn/cong-nghe/index.html">Công nghệ</a>
															</li>
															<li id="menu-item-5929"
																class="et_pb_menu_page_id-4339 menu-item menu-item-type-post_type menu-item-object-page menu-item-5929">
																<a href="https://ubtechvietnam.edu.vn/phan-mem/index.html">Phần Mềm Giáo Dục STEM AI
																	Robotics UBTECH</a>
															</li>
															<li id="menu-item-322"
																class="et_pb_menu_page_id-306 menu-item menu-item-type-post_type menu-item-object-page menu-item-322">
																<a href="https://ubtechvietnam.edu.vn/lien-he/index.html">Liên Hệ</a>
															</li>
														</ul>
													</nav>
												</div>


												<div class="et_mobile_nav_menu">
													<div class="mobile_nav closed">
														<span class="mobile_menu_bar"></span>
													</div>
												</div>
											</div>

										</div>
									</div>
									<div class="et_pb_module et_pb_code et_pb_code_0_tb_header">




										<div class="et_pb_code_inner">
											<style>
												/*Chỉnh Second-Level cho menu desktop*/
												.second-level {
													display: none;
													width: 20vw !important;
												}

												.second-level>a {
													text-align: center;
													font-size: 15px !important;
													font-weight: 400 !important;
													letter-spacing: 1px;
													vertical-align: middle;
												}

												.second-level>a img {
													vertical-align: middle;
													margin-bottom: 0px;
													-webkit-border-radius: 5px;
													-moz-border-radius: 5px;
													border-radius: 5px;
												}

												.et_mobile_menu .first-level>a {
													background-color: transparent;
													position: relative;
													font-size: 16px !important;
													width: 80vw !important;
												}

												.et_mobile_menu .first-level>a:after {
													font-family: 'ETmodules';
													content: '' !important;
													font-weight: normal;
													position: absolute;
													font-size: 16px;
													top: 13px;
													right: 30px;
												}

												.et_mobile_menu .first-level>.icon-switch:after {
													content: '' !important;
												}

												.et_mobile_menu .second-level {
													width: 80vw !important;
												}

												.reveal-items {
													display: block;
												}

												.et_mobile_menu {
													margin-top: 10px;
													width: 90vw !important;
													margin-left: -70%;
												}

												.et_mobile_menu .second-level>a {
													font-size: 14px !important;
													text-align: left;
													display: flex !important;
												}

												.et_mobile_menu .second-level>a img {
													width: 60px;
													height: 60px;
												}

												.et-db #et-boc .et-l .et_mobile_menu .menu-item-has-children>a {
													font-weight: 400;
												}
											</style>
											<script>(function ($) {

													function setup_collapsible_submenus() {

														var FirstLevel = $('.et_mobile_menu .first-level > a');

														FirstLevel.off('click').click(function () {
															$(this).attr('href', '#');
															$(this).parent().children().children().toggleClass('reveal-items');
															$(this).toggleClass('icon-switch');
														});


													}

													$(window).load(function () {
														setTimeout(function () {
															setup_collapsible_submenus();
														}, 700);
													});

												})(jQuery);</script>


										</div>
									</div>
								</div>
							</div>


						</div>
						<div
							class="et_pb_section et_pb_section_1_tb_header et_pb_sticky_module et_pb_with_background et_section_regular">






							<div
								class="et_pb_with_border et_pb_row et_pb_row_1_tb_header et_pb_equal_columns et_pb_gutters1">
								<div
									class="et_pb_column et_pb_column_1_3 et_pb_column_3_tb_header  et_pb_css_mix_blend_mode_passthrough">




									<div class="et_pb_module et_pb_image et_pb_image_1_tb_header">




										<a href="https://ubtechvietnam.edu.vn/index.html"><span class="et_pb_image_wrap "><img decoding="async"
													src="https://www.ubtechvietnam.com/wp-content/uploads/2021/04/LogoUB2.svg"
													alt="" title="LogoUB2" class="wp-image-8996" /></span></a>
									</div>
								</div>
								<div
									class="et_pb_column et_pb_column_1_3 et_pb_column_4_tb_header  et_pb_css_mix_blend_mode_passthrough">




									<div
										class="et_pb_module et_pb_text et_pb_text_1_tb_header menudesktop  et_pb_text_align_left et_pb_bg_layout_light">




										<div class="et_pb_text_inner">
											<!-- UberMenu [Configuration:main] [Theme Loc:] [Integration:api] -->
											<button
												class="ubermenu-responsive-toggle ubermenu-responsive-toggle-main ubermenu-skin-none ubermenu-loc- ubermenu-responsive-toggle-content-align-left ubermenu-responsive-toggle-align-full "
												tabindex="0" data-ubermenu-target="ubermenu-main-27"><i
													class="fas fa-bars"></i>Menu</button>
											<nav id="ubermenu-main-27"
												class="ubermenu ubermenu-nojs ubermenu-main ubermenu-menu-27 ubermenu-responsive ubermenu-responsive-default ubermenu-responsive-collapse ubermenu-horizontal ubermenu-transition-shift ubermenu-trigger-hover_intent ubermenu-skin-none  ubermenu-bar-align-left ubermenu-items-align-auto ubermenu-disable-submenu-scroll ubermenu-sub-indicators ubermenu-retractors-responsive ubermenu-submenu-indicator-closes">
												<ul id="ubermenu-nav-main-27" class="ubermenu-nav"
													data-title="Desktop Menu" style="padding:0">
													<li id="menu-item-8133"
														class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-item-8133 ubermenu-item-level-0 ubermenu-column ubermenu-column-auto ubermenu-has-submenu-drop ubermenu-has-submenu-mega">
														<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
															href="https://ubtechvietnam.edu.vn/chung-toi/index.html" tabindex="0"><span
																class="ubermenu-target-title ubermenu-target-text">GIỚI
																THIỆU</span><i
																class='ubermenu-sub-indicator fas fa-angle-down'></i></a>
														<ul
															class="ubermenu-submenu ubermenu-submenu-id-8133 ubermenu-submenu-type-auto ubermenu-submenu-type-mega ubermenu-submenu-drop ubermenu-submenu-align-full_width"
															style="    background-color: #1e73be;  border: 1px solid #ffffff;">
															<li id="menu-item-8132"
																class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-8132 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-1 ubermenu-column ubermenu-column-auto">
																<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																	href="https://ubtechvietnam.edu.vn/cong-nghe/index.html"><span
																		class="ubermenu-target-title ubermenu-target-text">Công
																		nghệ</span></a>
															</li>
															<li id="menu-item-8130"
																class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-8130 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-1 ubermenu-column ubermenu-column-auto">
																<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																	href="https://ubtechvietnam.edu.vn/phan-mem/index.html"><span
																		class="ubermenu-target-title ubermenu-target-text">Phần
																		Mềm Giáo Dục STEM AI Robotics UBTECH</span></a>
															</li>
															<li id="menu-item-8616"
																class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-8616 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-1 ubermenu-column ubermenu-column-auto">
																<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																	href="https://ubtechvietnam.edu.vn/a-i-center/index.html"><span
																		class="ubermenu-target-title ubermenu-target-text">A.I
																		Center</span></a>
															</li>
														</ul>
													</li>
													<li id="menu-item-26295"
														class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-26295 ubermenu-item-level-0 ubermenu-column ubermenu-column-auto">
														<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
															href="https://ubtechvietnam.edu.vn/chuong-trinh-ai-robotic-k12/index.html"
															tabindex="0"><span
																class="ubermenu-target-title ubermenu-target-text">AI
																&#038;
																ROBOTIC GIÁO DỤC</span></a>
													</li>
													<li id="menu-item-10042"
														class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-item-10042 ubermenu-item-level-0 ubermenu-column ubermenu-column-auto ubermenu-has-submenu-drop ubermenu-has-submenu-mega">
														<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
															href="https://ubtechvietnam.edu.vn/san-pham/index.html" tabindex="0"><span
																class="ubermenu-target-title ubermenu-target-text">GIẢI
																PHÁP
																ROBOT</span><i
																class='ubermenu-sub-indicator fas fa-angle-down'></i></a>
														<ul
															class="ubermenu-submenu ubermenu-submenu-id-10042 ubermenu-submenu-type-auto ubermenu-submenu-type-mega ubermenu-submenu-drop ubermenu-submenu-align-full_width">
															<!-- begin Tabs: [Tabs] 7860 -->
															<li id="menu-item-7860"
																class="ubermenu-item ubermenu-tabs ubermenu-item-7860 ubermenu-item-level-1 ubermenu-column ubermenu-column-full ubermenu-tab-layout-left ubermenu-tabs-show-default ubermenu-tabs-show-current">
																<ul
																	class="ubermenu-tabs-group ubermenu-column ubermenu-column-1-5 ubermenu-submenu ubermenu-submenu-id-7860 ubermenu-submenu-type-auto ubermenu-submenu-type-tabs-group">
																	<li id="menu-item-4436"
																		class="ubermenu-tab first-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-item-4436 ubermenu-item-auto ubermenu-column ubermenu-column-full ubermenu-has-submenu-drop"
																		data-ubermenu-trigger="mouseover"><a
																			class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																			href="https://ubtechvietnam.edu.vn/robot-dich-vu/index.html"><span
																				class="ubermenu-target-title ubermenu-target-text">Robot
																				Dịch Vụ</span><i
																				class='ubermenu-sub-indicator fas fa-angle-down'></i></a>
																		<ul
																			class="ubermenu-tab-content-panel ubermenu-column ubermenu-column-4-5 ubermenu-submenu ubermenu-submenu-id-4436 ubermenu-submenu-type-tab-content-panel">
																			<li id="menu-item-4419"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4419 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/adibot/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1A1g_tlcbODZ8gHxejM_QeXA0zQs613vb"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Adibot
																						</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4420"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4420 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/cruzr/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1q0l4wIuLhHDh5HX882Wp5w69smngbr4v"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Cruzr
																						</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4420"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4420 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/cadebot-l100/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1uCBMQ1S5IkI-uMYvTrbLm3YIruXKkOnp"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Cadebot L100
																						</p>
																					</span></a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-4434"
																		class="ubermenu-tab first-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-item-4434 ubermenu-item-auto ubermenu-column ubermenu-column-full ubermenu-has-submenu-drop"
																		data-ubermenu-trigger="mouseover"><a
																			class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																			href="https://ubtechvietnam.edu.vn/robot-cao-cap/index.html"><span
																				class="ubermenu-target-title ubermenu-target-text">Robot
																				Cao Cấp</span><i
																				class='ubermenu-sub-indicator fas fa-angle-down'></i></a>
																		<ul
																			class="ubermenu-tab-content-panel ubermenu-column ubermenu-column-4-5 ubermenu-submenu ubermenu-submenu-id-4434 ubermenu-submenu-type-tab-content-panel">
			
																			<li id="menu-item-4421"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4421 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-ugot/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1FgnTOunOS3puCpghVYDUsY651fkua_UW"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							AI
																							UGOT</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4421"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4421 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/alpha-mini/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1lleOiPYaTiiHjz4c9B_-CLiAQ6sTLkc3"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Alpha
																							Mini</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4422"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4422 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/alpha-1e/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1ZQfOilItslY3d5U_NPNvVLIqeYnMFiVO"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Alpha
																							1E</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8670"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8670 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/yanshee/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1WraFGOAZpaulz-zUMwTMsnlsZ2LoPgbM"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Yanshee</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8670"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8670 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/walkers1/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1SEj7W9nXw8Axw8MUv8-z2Wk-9PhTPtpq"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							WalkerS1</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8670"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8670 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/walkerE/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/10iW5rVSC6C8LJSYv-nnoMycM9Nl6iLzF"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Walker E</p>
																					</span></a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-8017"
																		class="ubermenu-tab first-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-has-children ubermenu-item-8017 ubermenu-item-auto ubermenu-column ubermenu-column-full ubermenu-has-submenu-drop"
																		data-ubermenu-trigger="mouseover"><a
																			class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																			href="https://ubtechvietnam.edu.vn/robot-jimu/index.html"><span
																				class="ubermenu-target-title ubermenu-target-text">Robot
																				Jimu</span><i
																				class='ubermenu-sub-indicator fas fa-angle-down'></i></a>
																		<ul
																			class="ubermenu-tab-content-panel ubermenu-column ubermenu-column-4-5 ubermenu-submenu ubermenu-submenu-id-8017 ubermenu-submenu-type-tab-content-panel">
																			<li id="menu-item-4427"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4427 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/astrobot-kit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1AF8F4JfZ3XDswguF12rvgwk5Z13vzIKo"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Astrobot Kit</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4425"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4425 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/courtbot-kit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1GjW_zAWyPNv2S9lgQPOeanmXYGUqLASd"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Courtbot Kit</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4423"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4423 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/scorebot-kit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1XoO2bT68UwMF7zmCb1BIlN8Py37sB2wv"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Scorebot Kit</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4424"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4424 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/trackbot-kit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/11m7b7B1TEL0aegWofXCoJC-DlV1fpavt"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Trackbot Kit</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4426"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4426 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/mythical-series-unicornbot-kit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1yfcdI9tQcZ_irSttNWKxZDBVXV-AseDG"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Unicornbot Kit</p>
																					</span></a>
																			</li>
																			<li id="menu-item-4428"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-4428 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/warriorbot-kit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1HKMVrDGVanCgkVJ6b1Sxb0WkqOhbQCOZ"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							Warriorbot Kit</p>
																					</span></a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-5486"
																		class="ubermenu-tab first-level ubermenu-item ubermenu-item-type-custom ubermenu-item-object-custom ubermenu-item-has-children ubermenu-item-5486 ubermenu-item-auto ubermenu-column ubermenu-column-full ubermenu-has-submenu-drop"
																		data-ubermenu-trigger="mouseover"><a
																			class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																			href="https://ubtechvietnam.edu.vn/"><span
																				class="ubermenu-target-title ubermenu-target-text">uKit
																				Dạy Học</span><i
																				class='ubermenu-sub-indicator fas fa-angle-down'></i></a>
																		<ul
																			class="ubermenu-tab-content-panel ubermenu-column ubermenu-column-4-5 ubermenu-submenu ubermenu-submenu-id-5486 ubermenu-submenu-type-tab-content-panel">
																			<li id="menu-item-7032"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-7032 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-fantasy-zoo-ukit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Fantasy Zoo</p>
																					</span></a>
																			</li>
																			<li id="menu-item-7138"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-7138 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-smart-life-ukit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Smart Life</p>
																					</span></a>
																			</li>
																			<li id="menu-item-7137"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-7137 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-transformer-workshop-ukit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Tranformer Workshop</p>
																					</span></a>
																			</li>
																			<li id="menu-item-7136"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-7136 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-magic-world-ukit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Magic World</p>
																					</span></a>
																			</li>
																			<li id="menu-item-7135"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-7135 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-super-assistant-ukit/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Super Assistant</p>
																					</span></a>
																			</li>
																			<li id="menu-item-7134"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-7134 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-super-engineer/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/12FekyybqvXMnb1dnFhjKNFG06H_cOYNf"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Super Engineer</p>
																					</span></a>
																			</li>
																		</ul>
																	</li>
																	<li id="menu-item-7101"
																		class="ubermenu-tab first-level ubermenu-item ubermenu-item-type-custom ubermenu-item-object-custom ubermenu-item-has-children ubermenu-item-7101 ubermenu-item-auto ubermenu-column ubermenu-column-full ubermenu-has-submenu-drop"
																		data-ubermenu-trigger="mouseover"><a
																			class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																			href="https://ubtechvietnam.edu.vn/"><span
																				class="ubermenu-target-title ubermenu-target-text">Sách</span><i
																				class='ubermenu-sub-indicator fas fa-angle-down'></i></a>
																		<ul
																			class="ubermenu-tab-content-panel ubermenu-column ubermenu-column-4-5 ubermenu-submenu ubermenu-submenu-id-7101 ubermenu-submenu-type-tab-content-panel">
																			<li id="menu-item-8358"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8358 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-fantasy-zoo-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/18QLpojyN4g-8gyLdpeO_1Mf-DkO_AQct"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Fantasy Zoo</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8357"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8357 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-smart-life-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1UtgvUnu7IZSx6lWkkQmfjox4ilzERZlX"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Smart Life</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8356"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8356 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-transformer-workshop-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1iy5Ig0wOLQA1kp4MxMnn6PqkN_7YJJeP"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Transformer Workshop</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8352"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8352 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-jimu-astrobot-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1LWoTIVtKtrHsWFRp9JELqdk4Ej-JHQod"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Jimu Astrobot</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8355"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8355 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-magic-world-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1zR4FubbXo2s0aiWDLjPZixnibzxuAt6N"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Magic World</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8354"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8354 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-super-assistant-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1mnEjEL4XkPDaKYybvlhjZeFyy8g5mRCS"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Super Assistant</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8353"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8353 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-super-engineer-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1bEid-sfUwd1U0oofpwwE6lWgXzhKHQZb"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Super Engineer</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8351"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8351 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="https://ubtechvietnam.edu.vn/product/ai-super-designer-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1Pn5OffIM4oUHF18jVuZ-oKQ9b4lEUG9X"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							A.I
																							Super Designer</p>
																					</span></a>
																			</li>
																			<li id="menu-item-8350"
																				class="second-level ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-product ubermenu-item-8350 ubermenu-item-auto ubermenu-item-header ubermenu-item-level-3 ubermenu-column ubermenu-column-auto">
																				<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
																					href="product/the-application-and-exploration-of-ai-book/index.html"><span
																						class="ubermenu-target-title ubermenu-target-text"><img
																							decoding="async"
																							src="https://lh3.googleusercontent.com/d/1JAunAeTuvJzTqgB4v4jN8P7zj6DxpoPz"
																							alt="Alternate Text"
																							width="100px" />
																						<p style="line-height: 40px;">
																							The
																							Application And Exploration
																							Of
																							A.I</p>
																					</span></a>
																			</li>
																		</ul>
																	</li>
																</ul>
															</li><!-- end Tabs: [Tabs] 7860 -->
														</ul>
													</li>
													<li id="menu-item-8646"
														class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-8646 ubermenu-item-level-0 ubermenu-column ubermenu-column-auto">
														<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
															href="https://ubtechvietnam.edu.vn/tin-tuc/index.html" tabindex="0"><span
																class="ubermenu-target-title ubermenu-target-text">Tin
																Tức</span></a>
													</li>
													<li id="menu-item-8131"
														class="ubermenu-item ubermenu-item-type-post_type ubermenu-item-object-page ubermenu-item-8131 ubermenu-item-level-0 ubermenu-column ubermenu-column-auto">
														<a class="ubermenu-target ubermenu-item-layout-default ubermenu-item-layout-text_only"
															href="https://ubtechvietnam.edu.vn/lien-he/index.html" tabindex="0"><span
																class="ubermenu-target-title ubermenu-target-text">Liên
																Hệ</span></a>
													</li>
												</ul>
											</nav>
											<!-- End UberMenu -->
										</div>
									</div>
									<div class="et_pb_module et_pb_code et_pb_code_1_tb_header">




										<div class="et_pb_code_inner">
											<style>
												/*phone screen*/
												@media screen and (max-width: 400px) {
													.langselector .country_selector_dropdown-content {
														position: absolute !important;
														top: 54px;
														left: -30vw;
													}
												}

												/*Ipad Screen*/
												@media screen and (min-width: 401px) and (max-width: 768px) {
													.langselector .country_selector_dropdown-content {
														position: absolute !important;
														left: -10vw;
														top: 54px;
													}
												}

												/*Ipad horizon Screen*/
												@media screen and (min-width: 769px) and (max-width: 1024px) {
													.langselector .country_selector_dropdown-content {
														position: absolute !important;
														left: -10vw;
														top: 54px;
													}
												}

												/*Desktop*/
												/*Desktop*/
												/*Desktop*/
												/*Desktop*/
												/*Desktop*/
												/*Desktop*/
												/*font kich thuoc cho uber menu*/
												.ubermenu-nav>.ubermenu-item>.ubermenu-target .ubermenu-target-title {
													font-family: 'Nunito', sans-serif;
													font-weight: 400;
													text-transform: uppercase;
													line-height: 1.5em;
													font-size: 14px;

												}

												/* Ubermenu target title */
												.ubermenu-tabs-group>.ubermenu-item>.ubermenu-target .ubermenu-target-title {
													font-family: 'Nunito', sans-serif;
													font-weight: 400;
													text-transform: uppercase;
													line-height: 1.5em;
													font-size: 14px;
												}

												/* Paragraph */
												.ubermenu-tabs-group .ubermenu-item p {
													font-family: 'Nunito', sans-serif;
													font-weight: 400;
													text-transform: uppercase;
													margin-top: 5px;
													line-height: 2em !important;
													font-size: 12px;
												}

												/* Font Icon mui ten dropdown ke ben Products */
												.ubermenu-nav>.ubermenu-item>.ubermenu-target .ubermenu-sub-indicator {
													font-size: 16px;
												}

												/*chinh do dai rong cua submenu*/
												.ubermenu.ubermenu-main.ubermenu-horizontal .ubermenu-item-level-0.ubermenu-active>.ubermenu-submenu-drop,
												.ubermenu.ubermenu-main.ubermenu-horizontal:not(.ubermenu-transition-shift) .ubermenu-item-level-0>.ubermenu-submenu-drop {
													width: 80vw;
													margin-top: 8px;
													border-radius: 12px;
													border-width: 4px;
													position: absolute;
												}
											</style>
										</div>
									</div>
								</div>
								<div
									class="et_pb_column et_pb_column_1_3 et_pb_column_5_tb_header  et_pb_css_mix_blend_mode_passthrough et-last-child">




									<div style="display: none;"
										class="et_pb_module et_pb_text et_pb_text_2_tb_header langselector  et_pb_text_align_left et_pb_bg_layout_light">




										<div class="et_pb_text_inner">
											<a class="country_selector_dropdown">
												<div class="country_selector_dropbtn"><span
														class="flag-icon flag-icon-vn"></span></div>
											</a>
											<div class="country_selector_dropdown-content">
												<ul class="wordpress-multilingual-multisite-country-selector"><a
														href="index.html">
														<li><span class="flag-icon flag-icon-vn"></span>Vietnamese</li>
													</a><a href="en/index.html">
														<li><span class="flag-icon flag-icon-us"></span>English</li>
													</a></ul>
											</div>
										</div>
									</div>
								</div>




							</div>


						</div>
					</div>
				</header>
`

document.querySelector('#footer-vam').innerHTML =
	`<footer class="et-l et-l--footer">
        <div class="et_builder_inner_content et_pb_gutters3">
            <div class="et_pb_section et_pb_section_0_tb_footer et_section_regular">
                <div
                    class="et_pb_with_border et_pb_row et_pb_row_0_tb_footer et_pb_equal_columns et_pb_gutters1">
                    <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_0_tb_footer  et_pb_css_mix_blend_mode_passthrough">
                        <div
                            class="et_pb_with_border et_pb_module et_pb_text et_pb_text_0_tb_footer et_clickable  et_pb_text_align_left et_pb_bg_layout_light">
                            <div class="et_pb_text_inner">
                                <h4><span style="font-size: large;"><strong>Liên Hệ</strong></span></h4>
                            </div>
                        </div>
                        <div
                            class="et_pb_module et_pb_text et_pb_text_1_tb_footer  et_pb_text_align_left et_pb_bg_layout_light">




                            <div class="et_pb_text_inner">
                                <p><span class="conatct_link"><strong>Hotline:</strong> <a
                                    href="tel:0915594103">+84 915 594
                                    103</a></span><br /><strong></strong></p>
                                <p><span class="conatct_link"><span
                                    class="conatct_link mail_link"><strong>Email:</strong> <a
                                        rel="nofollow noopener" target="_blank"
                                        href="mailto:webubtechvietnam@gmail.com">webubtechvietnam@gmail.com</a></span></span>
                                </p>
                                <p><strong>Văn phòng Phía Nam</strong>: <a
                                    href="https://goo.gl/maps/ir5TsXD7UszYxREi8">Tầng 3, tòa nhà Centec,
                                    72-74 Nguyễn Thị Minh Khai, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ
                                    Chí Minh, Việt Nam. <strong></strong>Giờ làm việc: Thứ Hai &#8211;
                                    Chủ Nhật / 09:00 Sáng &#8211; 18:00 Tối.</a></p>
                                <p><strong>Văn phòng Phía Bắc</strong>: <a
                                    href="https://goo.gl/maps/s9amaR9Z5mv8oY5EA">24 P. Hai Bà Trưng,
                                    Tràng Tiền, Hoàn Kiếm, Hà Nội.</a></p>
                                <p><strong>A.I Center &#8211; Thành phố Hồ Chí Minh</strong>: <a
                                    href="https://goo.gl/maps/cn1oh5MfJmQyh3og8"><span>Đại học Quốc gia
                                        Thành phố Hồ Chí Minh, Block 86, Khu công nghệ phần mềm, Võ
                                        Trường Toản, khu phố 6, Thủ Đức, Thành phố Hồ Chí
                                        Minh.</span></a></p>
                                <p><strong>A.I Center &#8211; Thành phố Đà Lạt:</strong> <a
                                    href="http://aic.dlu.edu.vn/">Số 01, đường Phù Đổng Thiên Vương,
                                    phường 8, thành phố Đà Lạt, tỉnh Lâm Đồng</a><span></span></p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="vamFooter2 et_pb_column et_pb_column_1_3 et_pb_column_1_tb_footer  et_pb_css_mix_blend_mode_passthrough">




                        <div
                            class="et_pb_with_border et_pb_module et_pb_text et_pb_text_2_tb_footer et_clickable  et_pb_text_align_left et_pb_bg_layout_light">




                            <div class="et_pb_text_inner">
                                <h3><strong>Giải pháp AI &amp; Robotics</strong></h3>
                            </div>
                        </div>
                        <div
                            class="et_pb_module et_pb_text et_pb_text_3_tb_footer et_clickable  et_pb_text_align_left et_pb_bg_layout_light">




                            <div class="et_pb_text_inner">
                                <p><a href="https://ubtechvietnam.edu.vn/chuong-trinh-ai-robotic-k12/index.html">Chương trình học AI
                                    &amp; Robotics</a></p>
                                <p><a href="https://ubtechvietnam.edu.vn/robot-dich-vu/index.html">Robot dịch vụ</a></p>
                                <p><a href="https://ubtechvietnam.edu.vn/robot-cao-cap/index.html">Robot giáo dục</a></p>
                                <p><a href="../category/ukit-day-hoc/index.html">UKIT học AI &amp;
                                    Robotics</a></p>
                                <p><a href="../category/sach-day-hoc/index.html">Bộ sách AI &amp; Robotics
                                    từ lớp 1 &#8211; 12</a></p>
                            </div>
                        </div>
                    </div>
                    <div
                        class="et_pb_column et_pb_column_1_3 et_pb_column_2_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child">




                        <div
                            class="et_pb_with_border et_pb_module et_pb_text et_pb_text_4_tb_footer  et_pb_text_align_left et_pb_bg_layout_light">




                            <div class="et_pb_text_inner">
                                <h3><strong>Giới thiệu</strong></h3>
                            </div>
                        </div>
                        <div
                            class="et_pb_module et_pb_text et_pb_text_5_tb_footer et_clickable  et_pb_text_align_left et_pb_bg_layout_light">




                            <div class="et_pb_text_inner">
                                <p><a href="../chung-toi/index.html">Về UBTECH</a></p>
                                <p><a href="index.html">Artificial Intelligent Center &#8211; Trung tâm giáo
                                    dục trí tuệ nhân tạo</a></p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>




                </div>
                <div class="et_pb_row et_pb_row_1_tb_footer">
                    <div
                        class="et_pb_column et_pb_column_1_2 et_pb_column_3_tb_footer  et_pb_css_mix_blend_mode_passthrough">




                        <div class="et_pb_module et_pb_image et_pb_image_0_tb_footer">




                            <a href="https://apps.apple.com/us/developer/ubtech-robotics/id975970176"><span
                                class="et_pb_image_wrap "><img decoding="async"
                                    src="../../www.ubtechvietnam.com/wp-content/uploads/2021/03/Apple_Store.jpg"
                                    alt="" title="Apple_Store" /></span></a>
                        </div>
                    </div>
                    <div
                        class="et_pb_column et_pb_column_1_2 et_pb_column_4_tb_footer  et_pb_css_mix_blend_mode_passthrough et-last-child">




                        <div class="et_pb_module et_pb_image et_pb_image_1_tb_footer">




                            <a href="https://play.google.com/store/apps/details?id=com.ubt.jimu"><span
                                class="et_pb_image_wrap "><img decoding="async"
                                    src="../../www.ubtechvietnam.com/wp-content/uploads/2021/03/Google_Store.jpg"
                                    alt="" title="Google_Store" /></span></a>
                        </div>
                    </div>




                </div>


            </div>
        </div>
    </footer>`
