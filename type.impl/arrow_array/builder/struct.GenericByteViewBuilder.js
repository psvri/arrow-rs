(function() {
    var type_impls = Object.fromEntries([["arrow_array",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrayBuilder-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#429-453\">Source</a><a href=\"#impl-ArrayBuilder-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"arrow_array/builder/trait.ArrayBuilder.html\" title=\"trait arrow_array::builder::ArrayBuilder\">ArrayBuilder</a> for <a class=\"struct\" href=\"arrow_array/builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#430-432\">Source</a><a href=\"#method.len\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the number of array slots in the builder</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#434-436\">Source</a><a href=\"#method.finish\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class='docblock'>Builds the array</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#438-440\">Source</a><a href=\"#method.finish_cloned\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"type\" href=\"arrow_array/array/type.ArrayRef.html\" title=\"type arrow_array::array::ArrayRef\">ArrayRef</a></h4></section></summary><div class='docblock'>Builds the array without resetting the underlying builder.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#442-444\">Source</a><a href=\"#method.as_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any\" class=\"fn\">as_any</a>(&amp;self) -&gt; &amp;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Returns the builder as a non-mutable <code>Any</code> reference. <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_any_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#446-448\">Source</a><a href=\"#method.as_any_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\" class=\"fn\">as_any_mut</a>(&amp;mut self) -&gt; &amp;mut dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a></h4></section></summary><div class='docblock'>Returns the builder as a mutable <code>Any</code> reference. <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.as_any_mut\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_box_any\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#450-452\">Source</a><a href=\"#method.into_box_any\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#tymethod.into_box_any\" class=\"fn\">into_box_any</a>(self: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;Self&gt;) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/any/trait.Any.html\" title=\"trait core::any::Any\">Any</a>&gt;</h4></section></summary><div class='docblock'>Returns the boxed builder as a box of <code>Any</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/mod.rs.html#334-336\">Source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/trait.ArrayBuilder.html#method.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether number of array slots is zero</div></details></div></details>","ArrayBuilder","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#417-427\">Source</a><a href=\"#impl-Debug-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"arrow_array/builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#418-426\">Source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#411-415\">Source</a><a href=\"#impl-Default-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"arrow_array/builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#412-414\">Source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3COption%3CV%3E%3E-for-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#455-464\">Source</a><a href=\"#impl-Extend%3COption%3CV%3E%3E-for-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt; for <a class=\"struct\" href=\"arrow_array/builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#459-463\">Source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;V&gt;&gt;&gt;(&amp;mut self, iter: I)</h4></section></summary><div class='docblock'>Extends a collection with the contents of an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#420\">Source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: A)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#428\">Source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<Option<V>>","arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GenericByteViewBuilder%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#93-409\">Source</a><a href=\"#impl-GenericByteViewBuilder%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"arrow_array/types/trait.ByteViewType.html\" title=\"trait arrow_array::types::ByteViewType\">ByteViewType</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"struct\" href=\"arrow_array/builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::GenericByteViewBuilder\">GenericByteViewBuilder</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#95-97\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::GenericByteViewBuilder\"><code>GenericByteViewBuilder</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_capacity\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#100-112\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.with_capacity\" class=\"fn\">with_capacity</a>(capacity: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html\" title=\"struct arrow_array::builder::GenericByteViewBuilder\"><code>GenericByteViewBuilder</code></a> with space for <code>capacity</code> string values.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_fixed_block_size\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#129-135\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.with_fixed_block_size\" class=\"fn\">with_fixed_block_size</a>(self, block_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Set a fixed buffer size for variable length strings</p>\n<p>The block size is the size of the buffer used to store values greater\nthan 12 bytes. The builder allocates new buffers when the current\nbuffer is full.</p>\n<p>By default the builder balances buffer size and buffer count by\ngrowing buffer size exponentially from 8KB up to 2MB. The\nfirst buffer allocated is 8KB, then 16KB, then 32KB, etc up to 2MB.</p>\n<p>If this method is used, any new buffers allocated are<br />\nexactly this size. This can be useful for advanced users\nthat want to control the memory usage and buffer count.</p>\n<p>See <a href=\"https://github.com/apache/arrow-rs/issues/6094\">https://github.com/apache/arrow-rs/issues/6094</a> for more details on the implications.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_block_size\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#140-142\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.with_block_size\" class=\"fn\">with_block_size</a>(self, block_size: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>) -&gt; Self</h4></section><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 53.0.0: Use <code>with_fixed_block_size</code> instead</span></div></span></summary><div class=\"docblock\"><p>Override the size of buffers to allocate for holding string data\nUse <code>with_fixed_block_size</code> instead.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_deduplicate_strings\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#148-156\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.with_deduplicate_strings\" class=\"fn\">with_deduplicate_strings</a>(self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Deduplicate strings while building the array</p>\n<p>This will potentially decrease the memory usage if the array have repeated strings\nIt will also increase the time to build the array as it needs to hash the strings</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_block\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#182-189\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.append_block\" class=\"fn\">append_block</a>(&amp;mut self, buffer: Buffer) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a></h4></section></summary><div class=\"docblock\"><p>Append a new data block returning the new block offset</p>\n<p>Note: this will first flush any in-progress block</p>\n<p>This allows appending views from blocks added using <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#method.append_block\" title=\"method arrow_array::builder::GenericByteViewBuilder::append_block\"><code>Self::append_block</code></a>. See\n<a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#method.append_value\" title=\"method arrow_array::builder::GenericByteViewBuilder::append_value\"><code>Self::append_value</code></a> for appending individual values</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>builder = StringViewBuilder::new();\n\n<span class=\"kw\">let </span>block = builder.append_block(<span class=\"string\">b\"helloworldbingobongo\"</span>.into());\n\nbuilder.try_append_view(block, <span class=\"number\">0</span>, <span class=\"number\">5</span>).unwrap();\nbuilder.try_append_view(block, <span class=\"number\">5</span>, <span class=\"number\">5</span>).unwrap();\nbuilder.try_append_view(block, <span class=\"number\">10</span>, <span class=\"number\">5</span>).unwrap();\nbuilder.try_append_view(block, <span class=\"number\">15</span>, <span class=\"number\">5</span>).unwrap();\nbuilder.try_append_view(block, <span class=\"number\">0</span>, <span class=\"number\">15</span>).unwrap();\n<span class=\"kw\">let </span>array = builder.finish();\n\n<span class=\"kw\">let </span>actual: Vec&lt;<span class=\"kw\">_</span>&gt; = array.iter().flatten().collect();\n<span class=\"kw\">let </span>expected = <span class=\"kw-2\">&amp;</span>[<span class=\"string\">\"hello\"</span>, <span class=\"string\">\"world\"</span>, <span class=\"string\">\"bingo\"</span>, <span class=\"string\">\"bongo\"</span>, <span class=\"string\">\"helloworldbingo\"</span>];\n<span class=\"macro\">assert_eq!</span>(actual, expected);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_view_unchecked\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#197-206\">Source</a><h4 class=\"code-header\">pub unsafe fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.append_view_unchecked\" class=\"fn\">append_view_unchecked</a>(\n    &amp;mut self,\n    block: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n    offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n    len: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n)</h4></section></summary><div class=\"docblock\"><p>Append a view of the given <code>block</code>, <code>offset</code> and <code>length</code></p>\n<h5 id=\"safety\"><a class=\"doc-anchor\" href=\"#safety\">§</a>Safety</h5>\n<p>(1) The block must have been added using <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#method.append_block\" title=\"method arrow_array::builder::GenericByteViewBuilder::append_block\"><code>Self::append_block</code></a>\n(2) The range <code>offset..offset+length</code> must be within the bounds of the block\n(3) The data in the block must be valid of type <code>T</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_append_view\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#211-235\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.try_append_view\" class=\"fn\">try_append_view</a>(\n    &amp;mut self,\n    block: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n    offset: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n    len: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, ArrowError&gt;</h4></section></summary><div class=\"docblock\"><p>Try to append a view of the given <code>block</code>, <code>offset</code> and <code>length</code></p>\n<p>See <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#method.append_block\" title=\"method arrow_array::builder::GenericByteViewBuilder::append_block\"><code>Self::append_block</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush_in_progress\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#239-244\">Source</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.flush_in_progress\" class=\"fn\">flush_in_progress</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Flushes the in progress block if any</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.push_completed\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#248-252\">Source</a><h4 class=\"code-header\">fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.push_completed\" class=\"fn\">push_completed</a>(&amp;mut self, block: Buffer)</h4></section></summary><div class=\"docblock\"><p>Append a block to <code>self.completed</code>, checking for overflow</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#257-273\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.get_value\" class=\"fn\">get_value</a>(&amp;self, index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Returns the value at the given index\nUseful if we want to know what value has been inserted to the builder\nThe index has to be smaller than <code>self.len()</code>, otherwise it will panic</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_value\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#283-346\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.append_value\" class=\"fn\">append_value</a>(&amp;mut self, value: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;)</h4></section></summary><div class=\"docblock\"><p>Appends a value into the builder</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>Panics if</p>\n<ul>\n<li>String buffer count exceeds <code>u32::MAX</code></li>\n<li>String length exceeds <code>u32::MAX</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_option\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#350-355\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.append_option\" class=\"fn\">append_option</a>(&amp;mut self, value: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T::<a class=\"associatedtype\" href=\"arrow_array/types/trait.ByteViewType.html#associatedtype.Native\" title=\"type arrow_array::types::ByteViewType::Native\">Native</a>&gt;&gt;)</h4></section></summary><div class=\"docblock\"><p>Append an <code>Option</code> value into the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.append_null\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#359-362\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.append_null\" class=\"fn\">append_null</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Append a null value into the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#365-376\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.finish\" class=\"fn\">finish</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"arrow_array/array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow_array/array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> and reset this builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.finish_cloned\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#379-390\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.finish_cloned\" class=\"fn\">finish_cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"arrow_array/array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::GenericByteViewArray\">GenericByteViewArray</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Builds the <a href=\"arrow_array/array/struct.GenericByteViewArray.html\" title=\"struct arrow_array::array::GenericByteViewArray\"><code>GenericByteViewArray</code></a> without resetting the builder</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validity_slice\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#393-395\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.validity_slice\" class=\"fn\">validity_slice</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the current null buffer as a slice</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.allocated_size\" class=\"method\"><a class=\"src rightside\" href=\"src/arrow_array/builder/generic_bytes_view_builder.rs.html#398-408\">Source</a><h4 class=\"code-header\">pub fn <a href=\"arrow_array/builder/struct.GenericByteViewBuilder.html#tymethod.allocated_size\" class=\"fn\">allocated_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the allocated size of this builder in bytes, useful for memory accounting.</p>\n</div></details></div></details>",0,"arrow_array::builder::generic_bytes_view_builder::StringViewBuilder","arrow_array::builder::generic_bytes_view_builder::BinaryViewBuilder"]]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[33151]}